"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlideOver = exports.SlideOverFooter = exports.SlideOverHeader = void 0;
var Hui = require("@headlessui/react");
var classnames_1 = require("classnames");
var React = require("react");
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
    var children = _a.children, onClose = _a.onClose;
    return (React.createElement(Hui.Transition.Root, { show: true, as: React.Fragment },
        React.createElement(Hui.Dialog, { as: "div", static: true, className: "fixed inset-0 overflow-hidden z-50", open: true, onClose: onClose },
            React.createElement("div", { className: "absolute inset-0 overflow-hidden" },
                React.createElement(Hui.Dialog.Overlay, { className: "absolute inset-0 bg-black opacity-10" }),
                React.createElement("div", { className: "fixed items-center inset-y-0 pr-16 max-w-full left-0 flex" },
                    React.createElement(Hui.Transition.Child, { as: React.Fragment, enter: "transform transition ease-in-out duration-500 sm:duration-700", enterFrom: "translate-x-full", enterTo: "translate-x-0", leave: "transform transition ease-in-out duration-500 sm:duration-700", leaveFrom: "translate-x-0", leaveTo: "translate-x-full" },
                        React.createElement("div", { className: "w-screen max-w-md" }, children)))))));
};
exports.SlideOver = SlideOver;
exports.default = exports.SlideOver;
//# sourceMappingURL=Slide.over.js.map