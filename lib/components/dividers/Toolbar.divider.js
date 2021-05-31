"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolbarDivider = exports.ToolbarButton = void 0;
var classnames_1 = require("classnames");
var react_1 = require("react");
var ToolbarButton = function (_a) {
    var label = _a.label, onTabClick = _a.onTabClick, _b = _a.first, first = _b === void 0 ? false : _b, _c = _a.index, index = _c === void 0 ? 0 : _c, _d = _a.active, active = _d === void 0 ? false : _d, _e = _a.last, last = _e === void 0 ? false : _e, title = _a.title, Icon = _a.icon;
    var btnClasses = classnames_1.default("relative inline-flex items-center px-4 py-2", "border border-gray-300 bg-white text-sm font-medium text-gray-400", "hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-gray-200", {
        "bg-gray-200": active,
        "rounded-l-md": first,
        "rounded-r-md": last,
    });
    var onButtonClick = function (evt) {
        evt.preventDefault();
        if (onTabClick) {
            onTabClick(index);
        }
    };
    return (react_1.default.createElement("button", { type: "button", className: btnClasses, title: title, onClick: onButtonClick },
        react_1.default.createElement(Icon, { className: "h-5 w-5 text-gray-600" }),
        react_1.default.createElement("span", { className: "ml-1 text-xs" }, label)));
};
exports.ToolbarButton = ToolbarButton;
var ToolbarDivider = function (_a) {
    var _b = _a.toolBarClasses, toolBarClasses = _b === void 0 ? "mt-4" : _b, children = _a.children, menu = _a.menu;
    var _c = react_1.useState(0), tabNumber = _c[0], setTabNumber = _c[1];
    var containerClasses = classnames_1.default("relative", toolBarClasses);
    var menuLength = menu.length;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: containerClasses },
            react_1.default.createElement("div", { className: "absolute inset-0 flex items-center", "aria-hidden": "true" },
                react_1.default.createElement("div", { className: "w-full border-t border-gray-300" })),
            react_1.default.createElement("div", { className: "relative flex justify-center" },
                react_1.default.createElement("span", { className: "relative z-0 inline-flex shadow-sm rounded-md -space-x-px" }, menu.map(function (itemProps, idx) { return (react_1.default.createElement(exports.ToolbarButton, __assign({ first: idx === 0, last: idx === menuLength - 1, active: idx === tabNumber, 
                    // eslint-disable-next-line react/no-array-index-key
                    key: idx }, itemProps, { onTabClick: setTabNumber, index: idx }))); })))),
        react_1.default.createElement(react_1.default.Fragment, null, react_1.default.Children.map(children, function (child, idx) {
            if (idx === tabNumber)
                return react_1.default.createElement("div", { className: "block" }, child);
            return react_1.default.createElement("div", { className: "hidden" }, child);
        }))));
};
exports.ToolbarDivider = ToolbarDivider;
//# sourceMappingURL=Toolbar.divider.js.map