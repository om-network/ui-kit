"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelDivider = void 0;
var react_1 = require("react");
var LabelDivider = function (_a) {
    var text = _a.text;
    return (react_1.default.createElement("div", { className: "relative" },
        react_1.default.createElement("div", { className: "absolute inset-0 flex items-center", "aria-hidden": "true" },
            react_1.default.createElement("div", { className: "w-full border-t border-gray-300" })),
        react_1.default.createElement("div", { className: "relative flex justify-center" },
            react_1.default.createElement("span", { className: "px-2 bg-white text-sm text-gray-500" }, text))));
};
exports.LabelDivider = LabelDivider;
exports.default = exports.LabelDivider;
//# sourceMappingURL=Label.divider.js.map