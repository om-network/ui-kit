"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var Hui = require("@headlessui/react");
var classnames_1 = require("classnames");
var React = require("react");
var Modal = function (_a) {
    var children = _a.children, _b = _a.width, width = _b === void 0 ? "max-w-md" : _b, onClose = _a.onClose;
    var cancelButtonRef = React.useRef(null);
    return (React.createElement(Hui.Transition.Root, { show: true, as: React.Fragment },
        React.createElement(Hui.Dialog, { as: "div", className: "fixed z-10 inset-0 overflow-y-auto", initialFocus: cancelButtonRef, onClose: onClose },
            React.createElement("div", { className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" },
                React.createElement(Hui.Transition.Child, { as: React.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
                    React.createElement(Hui.Dialog.Overlay, { className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" })),
                React.createElement("span", { className: "hidden sm:inline-block sm:align-middle sm:h-screen", "aria-hidden": "true" }, "\u200B"),
                React.createElement(Hui.Transition.Child, { as: React.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95", enterTo: "opacity-100 translate-y-0 sm:scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 translate-y-0 sm:scale-100", leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" },
                    React.createElement("div", { className: classnames_1.default("w-screen", width) }, children))))));
};
exports.Modal = Modal;
exports.default = exports.Modal;
//# sourceMappingURL=Modal.js.map