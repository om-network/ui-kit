"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleNotification = void 0;
var Hui = require("@headlessui/react");
var Hi = require("@heroicons/react/outline");
var His = require("@heroicons/react/solid");
var classnames_1 = require("classnames");
var React = require("react");
var intentType_enum_1 = require("../../enums/intentType.enum");
var SimpleNotification = function (_a) {
    var id = _a.id, model = _a.model, _b = _a.intent, intent = _b === void 0 ? intentType_enum_1.IntentType.none : _b, _c = _a.closeLabel, closeLabel = _c === void 0 ? "Close" : _c, onClose = _a.onClose, _d = _a.timer, _timer = _d === void 0 ? 3000 : _d;
    var _e = model, title = _e.title, description = _e.description;
    // auto close after 3 seconds
    React.useEffect(function () {
        var timer = setTimeout(function () {
            if (onClose) {
                onClose(id);
            }
        }, _timer);
        return function () { return clearTimeout(timer); };
    }, [onClose]);
    var wrapperClasses = "max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden";
    var buttonClasses = "bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none";
    var iconClasses = classnames_1.default("h-6 w-6", intent !== intentType_enum_1.IntentType.none && "text-" + intent + "-400");
    return (React.createElement(Hui.Transition, { show: true, as: React.Fragment, enter: "transform ease-out duration-300 transition", enterFrom: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2", enterTo: "translate-y-0 opacity-100 sm:translate-x-0", leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0" },
        React.createElement("div", { className: wrapperClasses },
            React.createElement("div", { className: "p-4" },
                React.createElement("div", { className: "flex items-start" },
                    React.createElement("div", { className: "flex-shrink-0" },
                        React.createElement(Hi.CheckCircleIcon, { className: iconClasses, "aria-hidden": "true" })),
                    React.createElement("div", { className: "ml-3 w-0 flex-1 pt-0.5" },
                        React.createElement("p", { className: "text-sm font-medium text-gray-900" }, title),
                        model.description && React.createElement("p", { className: "mt-1 text-sm text-gray-500" }, description)),
                    React.createElement("div", { className: "ml-4 flex-shrink-0 flex" },
                        React.createElement("button", { className: buttonClasses, type: "button", onClick: function () { return onClose(id); } },
                            React.createElement("span", { className: "sr-only" }, closeLabel),
                            React.createElement(His.XIcon, { className: "h-5 w-5", "aria-hidden": "true" }))))))));
};
exports.SimpleNotification = SimpleNotification;
exports.default = exports.SimpleNotification;
//# sourceMappingURL=Simple.notification.js.map