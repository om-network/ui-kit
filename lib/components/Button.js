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
exports.Button = void 0;
var classnames_1 = require("classnames");
var React = require("react");
var Button = function (props) {
    var label = props.label, active = props.active, danger = props.danger, children = props.children, _a = props.className, className = _a === void 0 ? "" : _a, buttonProps = __rest(props, ["label", "active", "danger", "children", "className"]);
    var btnClasses = classnames_1.default(className, {
        active: active,
        danger: danger,
        btn: !active && !danger
    });
    return (
    // eslint-disable-next-line react/button-has-type
    React.createElement("button", __assign({}, buttonProps, { className: btnClasses }),
        children,
        label));
};
exports.Button = Button;
exports.default = exports.Button;
//# sourceMappingURL=Button.js.map