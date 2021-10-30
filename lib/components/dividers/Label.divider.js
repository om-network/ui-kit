"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelDivider = void 0;
var React = require("react");
var LabelDivider = function (_a) {
    var text = _a.text;
    return (React.createElement("div", { className: "relative" },
        React.createElement("div", { className: "absolute inset-0 flex items-center", "aria-hidden": "true" },
            React.createElement("div", { className: "w-full border-t border-gray-300" })),
        React.createElement("div", { className: "relative flex justify-center" },
            React.createElement("span", { className: "px-2 bg-white text-sm text-gray-500" }, text))));
};
exports.LabelDivider = LabelDivider;
exports.default = exports.LabelDivider;
//# sourceMappingURL=Label.divider.js.map