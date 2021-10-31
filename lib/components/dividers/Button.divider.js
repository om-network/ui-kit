"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hi = require("@heroicons/react/outline");
var React = require("react");
var ButtonDivider = function (_a) {
    var _b = _a.text, text = _b === void 0 ? "More" : _b, onClick = _a.onClick;
    return (React.createElement("div", { className: "relative" },
        React.createElement("div", { className: "absolute inset-0 flex items-center", "aria-hidden": "true" },
            React.createElement("div", { className: "w-full border-t-0 border-gray-200" })),
        React.createElement("div", { className: "relative flex justify-center" },
            React.createElement("button", { type: "button", onClick: onClick, className: "inline-flex items-center shadow-sm px-4 py-1.5 border border-gray-400 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300" },
                React.createElement(Hi.PlusIcon, { className: "h-6 w-6 text-gray-400", "aria-hidden": "true" }),
                text))));
};
exports.default = ButtonDivider;
//# sourceMappingURL=Button.divider.js.map