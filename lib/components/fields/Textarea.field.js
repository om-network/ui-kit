"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextareaField = void 0;
var React = require("react");
var TextareaField = function (props) {
    var formRef = props.formRef, label = props.label, subLabel = props.subLabel, name = props.name, wrapperClasses = props.wrapperClasses, t = props.t, textareaProps = __rest(props, ["formRef", "label", "subLabel", "name", "wrapperClasses", "t"]);
    var errors = formRef.formState.errors, register = formRef.register;
    return (React.createElement("div", { className: wrapperClasses },
        React.createElement("label", { htmlFor: name, className: "block text-sm font-medium text-gray-900" },
            label,
            React.createElement("div", { className: "mt-1" },
                React.createElement("textarea", __assign({}, register(name), { id: name }, textareaProps, { className: "textarea" })))),
        errors[name] && (React.createElement("p", { className: "mt-2 text-sm text-red-500" },
            "* ",
            errors[name].message || (t && t(name + ": A validation errors occured.")))),
        subLabel && React.createElement("p", { className: "mt-2 text-xs text-gray-500" }, subLabel)));
};
exports.TextareaField = TextareaField;
exports.default = exports.TextareaField;
//# sourceMappingURL=Textarea.field.js.map