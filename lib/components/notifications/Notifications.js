"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notifications = void 0;
/* This example requires Tailwind CSS v2.0+ */
var React = require("react");
var Notifications = function (_a) {
    var children = _a.children;
    var wrapperClasses = "fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-20";
    var itemsClasses = "w-full flex flex-col items-center space-y-4 sm:items-end";
    return (React.createElement("div", { "aria-live": "assertive", className: wrapperClasses },
        React.createElement("div", { className: itemsClasses }, children)));
};
exports.Notifications = Notifications;
exports.default = exports.Notifications;
//# sourceMappingURL=Notifications.js.map