# React components

A collection of often used react components

## Try out
### 1 CodeSandbox
One way to try these components without installing them locally is running the codesandbox payground

[Codesandbox](https:#codesandbox.io/p/github/fabrigeas/react-components/master?workspaceId=fd2d12cf-24ef-42fa-9382-533cbefe6ae3&file=%2Fsrc%2Fcomponents%2FButton%2FButton.scss)

### 2- Locally
The other way by cloning the library and running the storybook locally
```bash
https:#github.com/fabrigeas/react-components
cd @fabrigeas/react-components
npm run start

# or (both scripts do the samething)
npm run storybook
```

## Usage
### 1. Button
```bash
npm i @fabrigeas/react-components
```

```tsx
import { Button } from '@fabrigeas/react-components';

# params:
# all react button params plus the following:
# outlined: boolean
# buttonType: 'info' | 'success' | 'warning' | 'danger'
<Button onClick={} type='submit'>Hello</Button> 
<Button outlined>Hello</Button>
<Button buttonType='success'>Save</Button>
<Button buttonType='info'>Start</Button>
<Button outlined buttonType='success'>Save changes</Button>
```

### 2. Input
```jsx
import { Input } from '@fabrigeas/react-components';

# params:
# all react input params plus the following
# isValid?: booleam 
# {/* <Input value={} onChange={} /> */}
<Input isValid={true} />
<Input isValid={true} validFeedback='Looks fine' />
<Input isValid={true} invalid='This field cannot be left empty' />
```

### 3. Icon
```jsx
import { Icon } from '@fabrigeas/react-components';

# params:
# all span params plus 
# icon: 'trash' | 'sort' | 'list' | 'home' | 'next'
<Icon icon='trash' />
<Icon icon='home'/>
```

### 4. IconButton
```jsx
  <Button>
    <Icon icon="sort" />
    Sort
  </Button>
```

## Contribution
```bash
git clone @fabrigeas/react-components
cd react-components
# make your changes and commit
# create a merge request and assign it to me 'fabrigeas@gmail.com'
```

## Deployment
```bash
# A grunt task has been configured to automatically deploy this package

grunt publish:major # increment the npm major version, then publish to npm and push to git
grunt publish:minor # increment the npm minor version, then publish to npm and push to git
grunt publish:patch # increment the npm patch version, then publish to npm and push to git
grunt publish # equivalent to grunt publish:patch
grunt publish:typo # equivalent to grunt publish:patch
```