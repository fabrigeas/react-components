'use strict';



function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

var jsxRuntime = require('react/jsx-runtime');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

___$insertStyle(".Button {\n  cursor: pointer;\n  border: transparent;\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n  color: white;\n  background: #2546f0;\n}\n.Button:hover {\n  background: #556ef3;\n}\n.Button.success {\n  background: #00bf7d;\n}\n.Button.success:hover {\n  background: #00f29e;\n}\n.Button.warning {\n  background: #f9d7a2;\n}\n.Button.error {\n  background: #d4370c;\n}\n.Button.outlined {\n  background: none;\n}\n.Button.outlined.primary {\n  outline: solid 2px #2546f0;\n  color: #2546f0;\n}\n.Button.outlined.primary:hover {\n  background: none;\n  color: #0f2fd3;\n}\n.Button.outlined.success {\n  outline: solid 2px #00bf7d;\n  color: #00bf7d;\n}\n.Button.outlined.success:hover {\n  background: none;\n  color: #008c5c;\n}\n.Button.outlined.warning {\n  outline: solid 2px #f9d7a2;\n  color: #f9d7a2;\n}\n.Button.outlined.warning:hover {\n  background: none;\n  color: #f6c272;\n}\n.Button.outlined.error {\n  outline: solid 2px #d4370c;\n  color: #d4370c;\n}\n.Button.outlined.error:hover {\n  background: none;\n  color: #a42a09;\n}\n.Button.outlined.info {\n  outline: solid 2px #2546f0;\n  color: #2546f0;\n}\n.Button.outlined.info:hover {\n  background: none;\n  color: #0f2fd3;\n}\n.Button > .Icon {\n  margin-right: 0.5rem;\n}");

var testId$1 = 'Button';
var Button = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'button' : _b, className = _a.className, _c = _a.buttonType, buttonType = _c === void 0 ? 'info' : _c, outlined = _a.outlined, rest = __rest(_a, ["type", "className", "buttonType", "outlined"]);
    return (jsxRuntime.jsx("button", __assign({ "data-testid": testId$1, type: type, className: "Button ".concat(buttonType, " ").concat(outlined ? 'outlined' : '', " ").concat(className !== null && className !== void 0 ? className : '') }, rest)));
};

___$insertStyle(".Icon.success {\n  color: transparent;\n  text-shadow: 0 0 0 #00bf7d;\n}\n.Icon.warning {\n  color: transparent;\n  text-shadow: 0 0 0 #f9d7a2;\n}\n.Icon.error {\n  color: transparent;\n  text-shadow: 0 0 0 #d4370c;\n}\n.Icon.info {\n  color: transparent;\n  text-shadow: 0 0 0 #2546f0;\n}");

var Icon = function (_a) {
    var iconType = _a.iconType, icon = _a.icon, rest = __rest(_a, ["iconType", "icon"]);
    var iconDict = {
        list: jsxRuntime.jsx("span", { children: "\u2630" }),
        sort: jsxRuntime.jsx("span", { children: "\u21C5" }),
        trash: jsxRuntime.jsx("span", { children: "\uD83D\uDDD1" }),
        home: jsxRuntime.jsx("span", { children: "\uD83C\uDFE0" }),
        next: jsxRuntime.jsx("span", { children: ">" }),
    };
    return (jsxRuntime.jsx("span", __assign({ className: "Icon ".concat(iconType) }, rest, { children: iconDict[icon] })));
};

___$insertStyle(".Input {\n  text-align: left;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 0 0 auto;\n  flex: 0 0 auto;\n  -ms-flex-flow: row wrap;\n  flex-flow: row wrap;\n  -ms-flex-align: center;\n  align-items: center;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  position: relative;\n  padding: 0 0.5rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-control:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #80bdff;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n}\n\ninput.form-control {\n  height: calc(1.5em + 0.75rem + 2px);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .form-control {\n    transition: none;\n  }\n}\n.form-control::-ms-expand {\n  background-color: transparent;\n  border: 0;\n}\n\n.form-control:-moz-focusring {\n  color: transparent;\n  text-shadow: 0 0 0 #495057;\n}\n\n.form-control::-webkit-input-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n\n.form-control::-moz-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n\n.form-control:-ms-input-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n\n.form-control::-ms-input-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n\n.form-control::placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n\n.form-control:disabled,\n.form-control[readonly] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\n\n.valid-feedback {\n  width: 100%;\n  font-size: 80%;\n  color: #28a745;\n}\n\n.invalid-feedback {\n  width: 100%;\n  font-size: 80%;\n  color: #dc3545;\n}\n\n.is-valid ~ .valid-feedback,\n.is-valid ~ .valid-tooltip,\n.was-validated :valid ~ .valid-feedback,\n.was-validated :valid ~ .valid-tooltip {\n  display: block;\n}\n\n.form-control.is-valid,\n.was-validated .form-control:valid {\n  border-color: #28a745;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n\n.form-control.is-valid:focus,\n.was-validated .form-control:valid:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.was-validated textarea.form-control:valid,\ntextarea.form-control.is-valid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n\n.is-invalid ~ .invalid-feedback,\n.is-invalid ~ .invalid-tooltip,\n.was-validated :invalid ~ .invalid-feedback,\n.was-validated :invalid ~ .invalid-tooltip {\n  display: block;\n}\n\n.form-control.is-invalid,\n.was-validated .form-control:invalid {\n  border-color: #dc3545;\n  padding-right: calc(1.5em + 0.75rem);\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-position: right calc(0.375em + 0.1875rem) center;\n  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);\n}\n\n.form-control.is-invalid:focus,\n.was-validated .form-control:invalid:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.was-validated textarea.form-control:invalid,\ntextarea.form-control.is-invalid {\n  padding-right: calc(1.5em + 0.75rem);\n  background-position: top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem);\n}\n\nlabel {\n  margin-bottom: -0.4rem;\n  background: white;\n  z-index: 2;\n  margin-left: 0.5rem;\n}\n\ntextarea {\n  resize: vertical;\n}");

var testId = 'Input';
var Input = function (_a) {
    var _b;
    var validFeedback = _a.validFeedback, invalidFeedback = _a.invalidFeedback, isValid = _a.isValid, label = _a.label, textarea = _a.textarea, className = _a.className, props = __rest(_a, ["validFeedback", "invalidFeedback", "isValid", "label", "textarea", "className"]);
    var id = Math.random().toString(16).slice(2);
    var validate = isValid !== undefined;
    var validClass = isValid ? 'is-valid' : 'is-invalid';
    var classList = "form-control ".concat(className !== null && className !== void 0 ? className : '', " ").concat(validate && validClass);
    return (jsxRuntime.jsxs("div", __assign({ "data-testid": testId, className: "Input ".concat(validClass, " ").concat((_b = props.type) !== null && _b !== void 0 ? _b : 'text') }, { children: [label && (jsxRuntime.jsx("label", __assign({ className: "form-label", htmlFor: id }, { children: label }))), textarea ? (jsxRuntime.jsx("textarea", __assign({ id: id, className: classList }, props, { style: { height: 'unset !important' } }))) : (jsxRuntime.jsx("input", __assign({ id: id, className: classList }, props))), jsxRuntime.jsx("div", __assign({ "data-testid": "feedback", className: "".concat(isValid ? 'valid' : 'invalid', "-feedback") }, { children: isValid ? validFeedback : invalidFeedback }))] })));
};

exports.Button = Button;
exports.Icon = Icon;
exports.Input = Input;
//# sourceMappingURL=index.js.map
