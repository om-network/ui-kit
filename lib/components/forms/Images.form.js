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
exports.ImagesForm = exports.RejectedImages = exports.Preview = void 0;
var solid_1 = require("@heroicons/react/solid");
var classnames_1 = require("classnames");
var lodash_1 = require("lodash");
var React = require("react");
var react_dropzone_1 = require("react-dropzone");
/* eslint-disable @next/next/no-img-element */
var pretty = require("prettysize");
var Remove = function (_a) {
    var onRemove = _a.onRemove, id = _a.id, _b = _a.hidden, hidden = _b === void 0 ? false : _b;
    var btnClasses = classnames_1.default("inline-flex items-center p-1 border mt-1 ml-1", {
        "border-transparent rounded-full shadow-sm text-white bg-gray-600": true,
        "hover:bg-gray-700": true,
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500": true
    });
    var onItemClick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        onRemove(id);
    };
    if (hidden)
        return null;
    return (React.createElement("div", { className: "absolute" },
        React.createElement("button", { type: "button", onClick: onItemClick, className: btnClasses },
            React.createElement(solid_1.XIcon, { className: "h-5", "aria-hidden": "true" }))));
};
var Upload = function (_a) {
    var RootProps = _a.RootProps, isDragActive = _a.isDragActive, labelsList = _a.labelsList;
    return (React.createElement("li", __assign({}, RootProps, { className: "relative focus:outline-none" }),
        React.createElement("div", { className: "flex justify-center px-4 py-5 border-2 border-gray-300 border-dashed rounded-md hover:border-gray-500" },
            React.createElement("div", { className: "text-center" },
                React.createElement("svg", { className: "mx-auto h-12 w-12 text-gray-400", stroke: "currentColor", fill: "none", viewBox: "0 0 48 48" },
                    React.createElement("path", { d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })),
                React.createElement("p", { className: "mt-1 text-xs text-gray-600" },
                    isDragActive && React.createElement("span", null, labelsList.dropFiles),
                    !isDragActive && (React.createElement("span", null,
                        React.createElement("button", { type: "button", className: "font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:underline transition duration-150 ease-in-out" }, labelsList.selectFile),
                        " ",
                        labelsList.orDragAndDrop))),
                React.createElement("p", { className: "mt-1 text-xs text-gray-500" }, labelsList.filesFormat)))));
};
var Preview = function (props) {
    var name = props.name, imageUrl = props.url;
    var imageClasses = classnames_1.default("focus:outline-none group block w-full aspect-w-10 aspect-h-7 rounded-md overflow-hidden");
    return (React.createElement("li", { className: "relative" },
        React.createElement("div", { className: imageClasses },
            React.createElement("img", { src: imageUrl, alt: name, className: "group-hover:opacity-75 object-cover pointer-events-none" }),
            React.createElement("button", { type: "button", className: "absolute inset-0" },
                React.createElement("span", { className: "sr-only" }, name)),
            React.createElement(Remove, __assign({}, props))),
        React.createElement("p", { className: "mt-2 block text-xs font-medium text-gray-900 truncate pointer-events-none" }, name)));
};
exports.Preview = Preview;
var RejectedImages = function (_a) {
    var rejectedImages = _a.rejectedImages, labelsList = _a.labelsList;
    var nextRejectedImages = rejectedImages.map(function (image) {
        return __assign(__assign({}, image), { preview: URL.createObjectURL(image.file) });
    });
    return (React.createElement("div", { className: "flex flex-col mt-3" },
        React.createElement("div", { className: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" },
            React.createElement("div", { className: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8" },
                React.createElement("div", { className: "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg" },
                    React.createElement("table", { className: "min-w-full divide-y divide-gray-200" },
                        React.createElement("thead", { className: "bg-gray-50" },
                            React.createElement("tr", null,
                                React.createElement("th", { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, labelsList.file),
                                React.createElement("th", { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, labelsList.errors))),
                        React.createElement("tbody", { className: "bg-white divide-y divide-gray-200" },
                            React.createElement("tr", null,
                                React.createElement("td", { colSpan: 2 },
                                    React.createElement("p", { className: "text-sm text-red-500 py-2 px-2" }, labelsList.correctErrors))),
                            nextRejectedImages.map(function (_a, idx) {
                                var file = _a.file, preview = _a.preview, errors = _a.errors;
                                return (React.createElement("tr", { key: idx },
                                    React.createElement("td", { className: "px-6 py-4 whitespace-nowrap" },
                                        React.createElement("div", { className: "flex items-center" },
                                            React.createElement("div", { className: "flex-shrink-0 h-10 w-10" },
                                                React.createElement("img", { className: "h-10 w-10 rounded-full", src: preview, alt: file.name })),
                                            React.createElement("div", { className: "ml-4" },
                                                React.createElement("div", { className: "text-sm font-medium text-gray-900" }, file.name),
                                                React.createElement("div", { className: "text-xs text-gray-500" }, pretty(file.size))))),
                                    React.createElement("td", { className: "px-6 py-4 whitespace-nowrap" },
                                        React.createElement("ul", { className: "text-xs" }, errors.map(function (e) { return (React.createElement("li", { key: e.code }, e.message)); })))));
                            }))))))));
};
exports.RejectedImages = RejectedImages;
var ImagesForm = function (_a) {
    var heading = _a.heading, subheading = _a.subheading, onRemove = _a.onRemove, _b = _a.wrapperClasses, _classes = _b === void 0 ? "my-3 focus:bg-gray-400" : _b, _c = _a.options, options = _c === void 0 ? { maxFiles: 6 } : _c, onFileChange = _a.onFileChange, _d = _a.fieldName, fieldName = _d === void 0 ? "images" : _d, _e = _a.labelsList, labelsList = _e === void 0 ? {
        file: "File",
        correctErrors: "Please try again. Correct the following error(s).",
        errors: "Errors",
        dropFiles: "Drop files here",
        filesFormat: "PNG, JPG, GIF up to 2MB",
        selectFile: "Select a file",
        orDragAndDrop: "or drag and drop"
    } : _e, previews = _a.previews;
    // on drop
    var onDrop = React.useCallback(function (acceptedFiles) {
        onFileChange(acceptedFiles);
    }, [onFileChange]);
    // options
    var _options = __assign(__assign({}, options), { maxFiles: (options.maxFiles || 6) - ((previews && previews.length) || 0) });
    // use dropzone
    var _f = react_dropzone_1.useDropzone(__assign(__assign({}, _options), { onDrop: onDrop })), getRootProps = _f.getRootProps, getInputProps = _f.getInputProps, fileRejections = _f.fileRejections, isDragActive = _f.isDragActive;
    // container clsses
    var wrapperClasses = classnames_1.default("relative", _classes);
    var listClasses = classnames_1.default("grid", "grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8");
    return (React.createElement("div", { className: wrapperClasses },
        React.createElement("div", { className: "flex-grow flex flex-col mb-3" },
            React.createElement("span", { className: "text-sm font-medium text-gray-900" }, heading),
            React.createElement("span", { className: "text-xs text-gray-500" }, subheading)),
        React.createElement("input", __assign({ name: fieldName }, getInputProps({ multiple: true }))),
        React.createElement("ul", { className: listClasses },
            previews && previews.length > 0 && previews.map(function (preview, idx) { return React.createElement(exports.Preview, __assign({ key: idx, onRemove: onRemove }, preview)); }),
            lodash_1.range(_options.maxFiles, options.maxFiles).map(function (idx) { return (React.createElement(Upload, { key: idx, RootProps: getRootProps(), isDragActive: isDragActive, labelsList: labelsList })); })),
        fileRejections && fileRejections.length > 0 && React.createElement(exports.RejectedImages, { rejectedImages: fileRejections, labelsList: labelsList })));
};
exports.ImagesForm = ImagesForm;
exports.default = exports.ImagesForm;
//# sourceMappingURL=Images.form.js.map