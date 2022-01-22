"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostalAddressForm = void 0;
var react_1 = require("react");
var Input_field_1 = require("../fields/Input.field");
var Select_field_1 = require("../fields/Select.field");
var PostalAddressForm = function (_a) {
    var formRef = _a.formRef, heading = _a.heading, subheading = _a.subheading, children = _a.children, _b = _a.fieldName, fieldName = _b === void 0 ? "postalAddress" : _b, stateOrProvincesList = _a.stateOrProvincesList, _c = _a.wrapperClasses, wrapperClasses = _c === void 0 ? "" : _c, _d = _a.labelsList, labelsList = _d === void 0 ? {
        streetAddress: {
            label: "Street Address",
            subLabel: "The street address."
        },
        addressLocality: {
            label: "City or town",
            subLabel: "Locality in which the street address is."
        },
        addressRegion: {
            label: "State or Province",
            subLabel: "State or province. eg, California"
        },
        postalCode: {
            label: "Postal Code",
            subLabel: "Postal or Zip code"
        },
        addressCountry: {
            label: "Country",
            subLabel: "The country. Provide the two-letter ISO 3166-1 alpha-2 country code"
        }
    } : _d, _e = _a.countriesList, countriesList = _e === void 0 ? [
        { label: "United States", value: "US" },
        { label: "Canada", value: "CA" }
    ] : _e, _f = _a.toggleable, toggleable = _f === void 0 ? false : _f;
    // set form
    var _g = react_1.useState(true), open = _g[0], setOpen = _g[1];
    var onOpen = function (e) {
        e.preventDefault();
        setOpen(!open);
    };
    var showDetail = false;
    if (open || toggleable === false || (open && toggleable)) {
        showDetail = true;
    }
    var detail = (react_1.default.createElement("div", { className: "space-y-3" },
        react_1.default.createElement(Input_field_1.InputField, { formRef: formRef, type: "text", name: fieldName + ".streetAddress", label: labelsList.streetAddress.label, subLabel: labelsList.streetAddress.subLabel }),
        react_1.default.createElement("div", { className: "flex" },
            react_1.default.createElement(Input_field_1.InputField, { wrapperClasses: "mr-2 w-2/5", formRef: formRef, type: "text", name: fieldName + ".addressLocality", label: labelsList.addressLocality.label, subLabel: labelsList.addressLocality.subLabel }),
            react_1.default.createElement(Select_field_1.SelectField, { formRef: formRef, wrapperClasses: "mr-2 w-2/5", label: labelsList.addressRegion.label, subLabel: labelsList.addressRegion.subLabel || "", options: stateOrProvincesList, name: fieldName + ".addressRegion" }),
            react_1.default.createElement(Input_field_1.InputField, { formRef: formRef, wrapperClasses: "w-1/5", type: "text", name: fieldName + ".postalCode", placeholder: "94043", label: labelsList.postalCode.label, subLabel: labelsList.postalCode.subLabel })),
        react_1.default.createElement(Select_field_1.SelectField, { formRef: formRef, label: labelsList.addressCountry.label, subLabel: labelsList.addressCountry.subLabel || "", options: countriesList, name: fieldName + ".addressCountry" }),
        children));
    return (react_1.default.createElement("div", { className: wrapperClasses },
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: "flex items-center justify-between" },
                heading && react_1.default.createElement("h3", { className: "text-lg leading-6 font-medium text-gray-900" }, heading),
                toggleable && (react_1.default.createElement("svg", { onClick: onOpen, className: "flex-shrink-0 w-6 h-6 text-gray-400 hover:text-gray-500 cursor-pointer", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                    react_1.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 9l4-4 4 4m0 6l-4 4-4-4" })))),
            subheading && react_1.default.createElement("p", { className: "mt-2 text-xs text-gray-500" }, subheading)),
        showDetail && detail));
};
exports.PostalAddressForm = PostalAddressForm;
//# sourceMappingURL=PostalAddress.form.js.map