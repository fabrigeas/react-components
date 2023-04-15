module.exports = grunt => {
  const pkg = grunt.file.readJSON('package.json');

  /**
   *
   * @param {string} stderr
   */
  const revertAndAbort = error => {
    grunt.log.error(error.toString());
    grunt.task.run('shell:revert');
  };

  grunt.initConfig({
    pkg,
    shell: {
      build: {
        command: [
          'npm run build',
          'git add dist',
          'git commit -m "update components build"',
        ].join(';'),
        callback({}, {}, {}, callback) {
          callback();
        },
      },
      bumpVersion: {
        command: v => `npm version --allow-same-version ${v} -m "version bump %s"`,
        options: {
          stdout: false,
          callback(error, {}, {}, callback) {
            if (error) {
              return revertAndAbort(error);
            }
            callback();
          },
        },
      },
      publishNpm: 'npm publish',
      gitPush: {
        command: ['git push', 'git push --tags'].join(';'),
      },
      updateChangelog: {
        command: [
          "git log --oneline | sed 's/^[a-zA-Z0-9]* //g' > CHANGELOG.md",
          'git add CHANGELOG.md',
          'git commit --no-verify --amend  --no-edit',
        ].join(';'),
        options: {
          stdout: false,
          callback(error, {}, {}, callback) {
            if (error) {
              return revertAndAbort(error);
            }
            callback();
          },
        },
      },
      revert: {
        command: [].join(';'),
        options: {
          callback() {
            grunt.log.error(`failed to deploy. Reverting all changes`);
          },
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-shell');

  /**
   * Register a grunt task for publishing this npm package
   * USAGE:
   * grunt publish:major // increase the npm major version, then publish to npm and push to git
   * grunt publish:minor // increase the npm minor version, then publish to npm and push to git
   * grunt publish:patch // increase the npm patch version, then publish to npm and push to git
   * grunt publish // equivalent to grunt publish:patch
   * grunt publish:typo // equivalent to grunt publish:patch
   */
  grunt.registerTask('publish', (version = 'patch') => {
    const { task } = grunt;

    if (!['major', 'minor', 'patch'].includes(version)) {
      version = 'patch';
    }

    task.run('shell:build');
    task.run(`shell:bumpVersion:${version}`);
    task.run('shell:publishNpm');
    task.run('shell:updateChangelog');
    task.run('shell:gitPush');
  });

  grunt.registerTask('shell:default', ['npm version']);
};
