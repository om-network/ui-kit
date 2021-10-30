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
exports.RadioGroupField = exports.RadioGroupFieldItem = void 0;
var classnames_1 = require("classnames");
var React = require("react");
var RadioGroupFieldItem = function (_a) {
    var formRef = _a.formRef, title = _a.title, _b = _a.disabled, disabled = _b === void 0 ? false : _b, description = _a.description, itemname = _a.itemname, name = _a.name;
    var register = formRef.register;
    var inputLabel = itemname + "_label";
    var inputDescription = itemname + "_description";
    return (React.createElement("div", null,
        React.createElement("div", { className: "relative flex items-start" },
            React.createElement("div", { className: "absolute flex items-center h-5" },
                React.createElement("input", __assign({ type: "radio", disabled: disabled }, register(name), { id: inputLabel, value: itemname, "aria-describedby": inputDescription, className: "focus:ring-gray-500 h-4 w-4 text-gray-600 border-gray-300" }))),
            React.createElement("div", { className: "pl-7 text-xs" },
                React.createElement("label", { htmlFor: inputLabel, className: "font-medium text-gray-900 cursor-pointer" },
                    title,
                    React.createElement("p", { id: inputDescription, className: "text-gray-500 font-normal" }, description))))));
};
exports.RadioGroupFieldItem = RadioGroupFieldItem;
var RadioGroupField = function (_a) {
    var name = _a.name, classes = _a.wrapperClasses, heading = _a.heading, _b = _a.disabled, disabled = _b === void 0 ? false : _b, formRef = _a.formRef, options = _a.options, subheading = _a.subheading;
    var wrapperClasses = classnames_1.default(classes, {
        "opacity-40 pointer-events-none": disabled,
    });
    return (React.createElement("div", { className: wrapperClasses },
        React.createElement("fieldset", { className: "mt-4 space-y-5" },
            React.createElement("div", { className: "flex flex-col justify-between" },
                React.createElement("legend", { className: "text-sm leading-6 font-medium text-gray-900" }, heading),
                React.createElement("p", { className: "mt-2 text-xs text-gray-500" }, subheading)),
            options.map(function (option) { return (React.createElement(exports.RadioGroupFieldItem, __assign({ key: option.itemname, formRef: formRef, disabled: disabled, name: name }, option))); }))));
};
exports.RadioGroupField = RadioGroupField;
exports.default = exports.RadioGroupField;
//# sourceMappingURL=RadioGroup.field.js.map