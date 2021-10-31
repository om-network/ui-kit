"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collapse = void 0;
var Hui = require("@headlessui/react");
var Hi = require("@heroicons/react/outline");
var classnames_1 = require("classnames");
var React = require("react");
var Collapse = function (_a) {
    var sections = _a.sections, title = _a.title;
    return (React.createElement("div", { className: "max-w-7xl mx-auto" },
        React.createElement("div", { className: "max-w-3xl mx-auto divide-y-2 " },
            title && React.createElement("h2", { className: "text-center text-3xl font-extrabold text-gray-900 sm:text-4xl" }, title),
            React.createElement("dl", null, sections.map(function (section) { return (React.createElement(Hui.Disclosure, { as: "div", key: section.key, className: "pt-4 w-full" }, function (_a) {
                var open = _a.open;
                return (React.createElement(React.Fragment, null,
                    React.createElement("dt", { className: "text-lg" },
                        React.createElement(Hui.Disclosure.Button, { className: "text-left w-full flex p-2 justify-between items-start bg-green-600 text-white" },
                            React.createElement("span", { className: "font-medium text-white" }, section.header),
                            React.createElement("span", { className: "ml-6 h-7 flex items-center" },
                                React.createElement(Hi.ChevronDownIcon, { className: classnames_1.default(open ? "-rotate-180" : "rotate-0", "h-6 w-6 transform"), "aria-hidden": "true" })))),
                    React.createElement(Hui.Disclosure.Panel, { as: "dd", className: "bg-gray-100" },
                        React.createElement("div", { className: "text-base text-gray-500 p-2" }, section.body))));
            })); })))));
};
exports.Collapse = Collapse;
exports.default = exports.Collapse;
//# sourceMappingURL=Collapse.js.map