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
exports.ListItemsField = exports.ListItemsFieldToolbar = exports.FieldsetField = void 0;
var Hi = require("@heroicons/react/outline");
var classnames_1 = require("classnames");
var range_1 = require("lodash/range");
var React = require("react");
var Rhf = require("react-hook-form");
var FieldsetField = function (_a) {
    var formRef = _a.formRef, name = _a.name, value = _a.value, _b = _a.index, index = _b === void 0 ? 0 : _b, itemClasses = _a.itemClasses, _c = _a.label, label = _c === void 0 ? "Label" : _c, _d = _a.placeholderLabel, placeholderLabel = _d === void 0 ? "label" : _d, _e = _a.urlLabel, urlLabel = _e === void 0 ? "URL" : _e, _f = _a.urlPlaceholderLabel, urlPlaceholderLabel = _f === void 0 ? "example-page" : _f;
    var register = formRef.register;
    var labelName = name + "." + index + ".label";
    var urlName = name + "." + index + ".url";
    var fieldClasses = classnames_1.default("flex flex-row py-1.5", itemClasses);
    return (React.createElement("fieldset", { className: fieldClasses },
        React.createElement("label", { htmlFor: labelName, className: "w-2/5 mr-2" },
            React.createElement("span", { className: "sr-only" }, label),
            React.createElement("input", __assign({ type: "text" }, register(labelName), { defaultValue: value.label, id: labelName, onChange: undefined, placeholder: placeholderLabel, className: "input py-1" }))),
        React.createElement("label", { htmlFor: urlName, className: "w-3/5" },
            React.createElement("span", { className: "sr-only" }, urlLabel),
            React.createElement("input", __assign({ type: "url" }, register(urlName), { defaultValue: value.url, id: urlName, onChange: undefined, placeholder: urlPlaceholderLabel, className: "input py-1" })))));
};
exports.FieldsetField = FieldsetField;
var ListItemsFieldToolbar = function (_a) {
    var children = _a.children, last = _a.last, index = _a.index, onAdd = _a.onAdd, onRemove = _a.onRemove;
    return (React.createElement("div", { className: "flex justify-center items-center" },
        children,
        React.createElement("label", { htmlFor: "action", className: "ml-2" },
            React.createElement("span", null,
                last && React.createElement(Hi.PlusIcon, { className: "h-6 w-6 text-gray-400 hover:text-gray-600 cursor-pointer", onClick: onAdd }),
                !last && React.createElement(Hi.MinusCircleIcon, { className: "h-6 w-6 text-red-800 hover:text-red-600 cursor-pointer", onClick: function () { return onRemove && onRemove(index); } })))));
};
exports.ListItemsFieldToolbar = ListItemsFieldToolbar;
var ListItemsField = function (props) {
    var formRef = props.formRef, label = props.label, subLabel = props.subLabel, name = props.name, _a = props.max, max = _a === void 0 ? 5 : _a, wrapperClasses = props.wrapperClasses, children = props.children, _b = props.collapsed, collapsed = _b === void 0 ? false : _b, _c = props.canCollapse, canCollapse = _c === void 0 ? false : _c;
    var _d = React.useState(!collapsed), open = _d[0], setOpen = _d[1];
    var _e = Rhf.useFieldArray({
        control: formRef.control,
        name: name
    }), fields = _e.fields, append = _e.append, remove = _e.remove;
    React.useEffect(function () {
        if (fields === undefined || fields.length === 0) {
            var defaultValues = range_1.default(max).map(function () { return [{ label: "", url: "" }]; });
            formRef.setValue(name, defaultValues);
        }
    }, [fields]);
    return (React.createElement("div", { className: wrapperClasses },
        label && React.createElement("h3", { className: "block text-sm font-medium text-gray-900" }, label),
        subLabel && (React.createElement("div", { className: "flex flex-row" },
            React.createElement("p", { className: "text-xs text-gray-600" }, subLabel),
            canCollapse && (React.createElement("span", { "aria-hidden": true, onClick: function () { return setOpen(!open); } },
                React.createElement(Hi.SelectorIcon, { className: "w-6 h-6 text-gray-600 cursor-pointer" }))))),
        open && (React.createElement("div", { className: "pt-4" },
            children, fields === null || fields === void 0 ? void 0 :
            fields.map(function (field, idx) {
                var isLast = idx === fields.length - 1 && fields.length < max;
                return (React.createElement(exports.ListItemsFieldToolbar, { key: field.id, index: idx, last: isLast, onAdd: function () { return append({ label: "", url: "" }); }, onRemove: function (index) { return remove(index); } },
                    React.createElement(exports.FieldsetField, { index: idx, formRef: formRef, value: field, name: name })));
            })))));
};
exports.ListItemsField = ListItemsField;
exports.default = exports.ListItemsField;
//# sourceMappingURL=ListItems.field.js.map