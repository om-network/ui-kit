"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopOver = exports.TopOverHeader = void 0;
var Hui = require("@headlessui/react");
var classnames_1 = require("classnames");
var React = require("react");
var TopOverHeader = function (_a) {
    var title = _a.title, description = _a.description;
    return (React.createElement("div", { className: "py-3 mb-0 px-4 bg-white" },
        title && React.createElement("h2", { className: "text-lg font-medium border-b-2 mb-2 pb-1 text-center text-gray-700" }, title),
        description && (React.createElement("div", { className: "mt-1 py-1" },
            React.createElement("p", { className: "text-sm text-gray-500" }, description)))));
};
exports.TopOverHeader = TopOverHeader;
var TopOver = function (_a) {
    var children = _a.children, _b = _a.width, width = _b === void 0 ? "max-w-md" : _b;
    return (React.createElement(Hui.Transition.Root, { show: true, as: React.Fragment },
        React.createElement("div", { className: "absolute inset-0 overflow-hidden bg-gray-50 bg-opacity-80" },
            React.createElement("div", { className: "sticky inset-y-0 max-w-full top-0 flex flex-col items-center" },
                React.createElement(Hui.Transition.Child, { as: React.Fragment, enter: "transform transition ease-in-out duration-500 sm:duration-700", enterFrom: "-translate-y-full", enterTo: "translate-y-0", leave: "transform transition ease-in-out duration-500 sm:duration-700", leaveFrom: "-translate-y-full", leaveTo: "translate-y-0" },
                    React.createElement("div", { className: classnames_1.default("w-screen", width) }, children))))));
};
exports.TopOver = TopOver;
exports.default = exports.TopOver;
//# sourceMappingURL=Top.over.js.map