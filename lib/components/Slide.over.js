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
exports.SlideOver = exports.SlideOverFooter = exports.SlideOverHeader = void 0;
var Hui = require("@headlessui/react");
var classnames_1 = require("classnames");
var React = require("react");
var positionType_enum_1 = require("../enums/positionType.enum");
var SlideOverHeader = function (_a) {
    var title = _a.title, description = _a.description, children = _a.children;
    return (React.createElement("div", { className: "py-6 px-4 bg-gray-100 sm:px-6" },
        React.createElement("div", { className: "flex items-center justify-between" },
            React.createElement(Hui.Dialog.Title, { className: "text-lg font-medium text-gray-600" }, title),
            children),
        description && (React.createElement("div", { className: "mt-2" },
            React.createElement("p", { className: "text-xs text-gray-600" }, description)))));
};
exports.SlideOverHeader = SlideOverHeader;
var SlideOverFooter = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? "justify-end" : _b;
    return (React.createElement("div", { className: classnames_1.default("flex-shrink-0 px-4 py-4 flex bg-gray-100", className) }, children));
};
exports.SlideOverFooter = SlideOverFooter;
var SlideOver = function (_a) {
    var children = _a.children, onClose = _a.onClose, _b = _a.position, position = _b === void 0 ? positionType_enum_1.PositionType.leftmid : _b;
    var contentClasses = classnames_1.default("fixed items-center inset-y-0 max-w-full flex", {
        "pr-16 left-0": position === positionType_enum_1.PositionType.leftmid,
        "pl-16 right-0": position === positionType_enum_1.PositionType.rightmid
    });
    var transitionProps = {
        enterFrom: position === positionType_enum_1.PositionType.leftmid ? "translate-x-full" : "translate-x-0",
        enterTo: position === positionType_enum_1.PositionType.leftmid ? "translate-x-0" : "translate-x-full",
        leaveFrom: position === positionType_enum_1.PositionType.leftmid ? "translate-x-0" : "translate-x-full",
        leaveTo: position === positionType_enum_1.PositionType.leftmid ? "translate-x-full" : "translate-x-0"
    };
    return (React.createElement(Hui.Transition.Root, { show: true, as: React.Fragment },
        React.createElement(Hui.Dialog, { as: "div", static: true, className: "fixed inset-0 overflow-hidden z-50", open: true, onClose: onClose },
            React.createElement("div", { className: "absolute inset-0 overflow-hidden" },
                React.createElement(Hui.Dialog.Overlay, { className: "absolute inset-0 bg-black opacity-10" }),
                React.createElement("div", { className: contentClasses },
                    React.createElement(Hui.Transition.Child, __assign({ as: React.Fragment, enter: "transform transition ease-in-out duration-500 sm:duration-700", leave: "transform transition ease-in-out duration-500 sm:duration-700" }, transitionProps),
                        React.createElement("div", { className: "w-screen max-w-md" }, children)))))));
};
exports.SlideOver = SlideOver;
exports.default = exports.SlideOver;
//# sourceMappingURL=Slide.over.js.map