"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlideOverFooter = exports.SlideOverHeader = void 0;
var react_1 = require("@headlessui/react");
var classnames_1 = require("classnames");
var react_2 = require("react");
var SlideOverHeader = function (_a) {
    var title = _a.title, description = _a.description, children = _a.children;
    return (react_2.default.createElement("div", { className: "py-6 px-4 bg-gray-100 sm:px-6" },
        react_2.default.createElement("div", { className: "flex items-center justify-between" },
            react_2.default.createElement(react_1.Dialog.Title, { className: "text-lg font-medium text-gray-600" }, title),
            children),
        description && (react_2.default.createElement("div", { className: "mt-2" },
            react_2.default.createElement("p", { className: "text-xs text-gray-600" }, description)))));
};
exports.SlideOverHeader = SlideOverHeader;
var SlideOverFooter = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? "justify-end" : _b;
    return (react_2.default.createElement("div", { className: classnames_1.default("flex-shrink-0 px-4 py-4 flex bg-gray-100", className) }, children));
};
exports.SlideOverFooter = SlideOverFooter;
var SlideOver = function (_a) {
    var children = _a.children, onClose = _a.onClose;
    return (react_2.default.createElement(react_1.Transition.Root, { show: true, as: react_2.Fragment },
        react_2.default.createElement(react_1.Dialog, { as: "div", static: true, className: "fixed inset-0 overflow-hidden z-50", open: true, onClose: onClose },
            react_2.default.createElement("div", { className: "absolute inset-0 overflow-hidden" },
                react_2.default.createElement(react_1.Dialog.Overlay, { className: "absolute inset-0 bg-black opacity-10" }),
                react_2.default.createElement("div", { className: "fixed items-center inset-y-0 pr-16 max-w-full left-0 flex" },
                    react_2.default.createElement(react_1.Transition.Child, { as: react_2.Fragment, enter: "transform transition ease-in-out duration-500 sm:duration-700", enterFrom: "translate-x-full", enterTo: "translate-x-0", leave: "transform transition ease-in-out duration-500 sm:duration-700", leaveFrom: "translate-x-0", leaveTo: "translate-x-full" },
                        react_2.default.createElement("div", { className: "w-screen max-w-md" }, children)))))));
};
exports.default = SlideOver;
//# sourceMappingURL=Slide.over.js.map