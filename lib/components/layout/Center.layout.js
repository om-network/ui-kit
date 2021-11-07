"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CenterLayout = void 0;
var React = require("react");
var CenterLayout = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, top = _a.top, footer = _a.footer, children = _a.children;
    return (React.createElement("div", null,
        React.createElement("div", { className: "fixed top-0 left-0 w-1/2 h-full bg-gray-50" }),
        React.createElement("div", { className: "fixed top-0 right-0 w-1/2 h-full bg-gray-50" }),
        React.createElement("div", { className: "relative min-h-screen flex flex-col" },
            top,
            React.createElement("div", { className: "flex-grow w-full max-w-3xl mx-auto xl:px-8 lg:flex" },
                React.createElement("div", { className: "flex-1 min-w-0 bg-gray-50 xl:flex" },
                    React.createElement("div", { className: "bg-gray-50 lg:min-w-0 lg:flex lg:flex-grow lg:flex-col lg:justify-between" },
                        React.createElement("div", { className: "pl-4 pr-6 pt-4 pb-4 bg-white border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0" },
                            React.createElement("div", { className: "flex items-left flex-col mb-6" },
                                React.createElement("h1", { className: "flex-1 text-xl leading-7 font-medium" }, title),
                                subtitle && React.createElement("p", { className: "mt-2 text-sm text-gray-500" }, subtitle)),
                            children),
                        footer))))));
};
exports.CenterLayout = CenterLayout;
exports.default = exports.CenterLayout;
//# sourceMappingURL=Center.layout.js.map