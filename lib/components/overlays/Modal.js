"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = exports.ModalFooter = exports.ModalPanel = void 0;
var Hui = require("@headlessui/react");
var outline_1 = require("@heroicons/react/outline");
var React = require("react");
var ModalPanel = function (_a) {
    var children = _a.children, _b = _a.icon, icon = _b === void 0 ? React.createElement(outline_1.ExclamationIcon, { className: "h-6 w-6 text-red-600", "aria-hidden": "true" }) : _b, title = _a.title, closeLabel = _a.closeLabel, onClose = _a.onClose;
    return (React.createElement("div", { className: "inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" },
        React.createElement("div", { className: "hidden sm:block absolute top-0 right-0 pt-4 pr-4" },
            React.createElement("button", { type: "button", className: "bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", onClick: function () { return onClose(); } },
                React.createElement("span", { className: "sr-only" }, closeLabel),
                React.createElement(outline_1.XIcon, { className: "h-6 w-6", "aria-hidden": "true" }))),
        React.createElement("div", { className: "sm:flex sm:items-start" },
            React.createElement("div", { className: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10" }, icon),
            React.createElement("div", { className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left" },
                title && (React.createElement(Hui.Dialog.Title, { as: "h3", className: "text-lg leading-6 font-medium text-gray-900" }, title)),
                children))));
};
exports.ModalPanel = ModalPanel;
var ModalFooter = function (children, wrapperClasses) {
    if (wrapperClasses === void 0) { wrapperClasses = "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"; }
    return React.createElement("div", { className: wrapperClasses }, children);
};
exports.ModalFooter = ModalFooter;
var Modal = function (_a) {
    var children = _a.children, _b = _a.closeLabel, closeLabel = _b === void 0 ? "Close" : _b, onClose = _a.onClose;
    var cancelButtonRef = React.useRef(null);
    return (React.createElement(Hui.Transition.Root, { show: true, as: React.Fragment },
        React.createElement(Hui.Dialog, { as: "div", className: "fixed z-10 inset-0 overflow-y-auto", initialFocus: cancelButtonRef, onClose: onClose },
            React.createElement("div", { className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" },
                React.createElement(Hui.Transition.Child, { as: React.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                    React.createElement(Hui.Dialog.Overlay, { className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })),
                React.createElement("span", { className: "hidden sm:inline-block sm:align-middle sm:h-screen", "aria-hidden": "true" }, "\u200B"),
                React.createElement(Hui.Transition.Child, { as: React.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", enterTo: "opacity-100 translate-y-0 sm:scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 translate-y-0 sm:scale-100", leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" },
                    React.createElement(exports.ModalPanel, { onClose: onClose, closeLabel: closeLabel }, children))))));
};
exports.Modal = Modal;
exports.default = exports.Modal;
//# sourceMappingURL=Modal.js.map