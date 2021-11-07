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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleField = void 0;
var classnames_1 = require("classnames");
var React = require("react");
var ToggleField = function (_a) {
    var label = _a.label, subLabel = _a.subLabel, name = _a.name, _b = _a.fieldClasses, fieldClasses = _b === void 0 ? "py-3" : _b, formRef = _a.formRef;
    var wrapperClasses = classnames_1.default("flex items-center justify-between sm:col-span-6 border-gray-200", fieldClasses);
    var setValue = formRef.setValue, getValues = formRef.getValues, watch = formRef.watch, register = formRef.register;
    var watchValue = watch(name) === "true" || watch(name) === true;
    // button classes
    var buttonClasses = classnames_1.default("relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent", {
        "rounded-full cursor-pointer transition-colors ease-in-out duration-200": true,
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500": true,
        "bg-gray-600": watchValue,
        "bg-gray-200": !watchValue
    });
    // ariaClasses
    var ariaClasses = classnames_1.default("pointer-events-none inline-block h-5 w-5 rounded-full bg-white", {
        "shadow transform ring-0 transition ease-in-out duration-200": true,
        "translate-x-0": !watchValue,
        "translate-x-5": watchValue
    });
    var onClick = function (event) {
        event.preventDefault();
        var value = getValues(name) === "true" || watch(name) === true;
        setValue(name, value ? "false" : "true");
    };
    return (React.createElement("div", { className: wrapperClasses, onClick: onClick },
        React.createElement("span", { className: "flex-grow flex flex-col", id: name },
            React.createElement("span", { className: "text-sm font-medium text-gray-900" }, label),
            React.createElement("span", { className: "text-xs text-gray-500" }, subLabel)),
        React.createElement("button", __assign({}, register(name), { className: buttonClasses, "aria-pressed": "false", "aria-labelledby": name }),
            React.createElement("span", { className: "sr-only" }, label),
            React.createElement("span", { "aria-hidden": "true", className: ariaClasses }))));
};
exports.ToggleField = ToggleField;
//# sourceMappingURL=Toggle.field.js.map