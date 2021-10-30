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
exports.FileUploadField = void 0;
var Hi = require("@heroicons/react/outline");
var classnames_1 = require("classnames");
var React = require("react");
var Rd = require("react-dropzone");
var ClearButton = function (_a) {
    var onClear = _a.onClear, _b = _a.label, label = _b === void 0 ? "Clear" : _b;
    var btnClasses = classnames_1.default("inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md", "text-gray-700 bg-white transition ease-in-out duration-150", "hover:border-gray-700 focus:outline-none focus:border-gray-700");
    return (React.createElement("div", { className: "absolute bottom-0 right-0 mr-1 mb-1" },
        React.createElement("button", { onClick: onClear, type: "button", className: btnClasses },
            React.createElement(Hi.TrashIcon, { className: "-ml-0.5 mr-2 h-4 w-4" }),
            label)));
};
var FileUploadField = function (_a) {
    var label = _a.label, _b = _a.options, options = _b === void 0 ? { accept: "image/png, image/jpeg, image/gif", maxSize: 2000000 } : _b, _c = _a.fieldClasses, fieldClasses = _c === void 0 ? "my-0" : _c, formRef = _a.formRef, _preview = _a.preview, _d = _a.name, name = _d === void 0 ? "fileupload" : _d, _onFileChange = _a.onFileChange, _onClear = _a.onClear, _e = _a.fileFormatLabel, fileFormatLabel = _e === void 0 ? "PNG, JPG, GIF up to 2MB" : _e, _f = _a.dropFileLabel, dropFileLabel = _f === void 0 ? "Drop the files here." : _f, _g = _a.uploadFileLabel, uploadFileLabel = _g === void 0 ? "Upload a file" : _g, _h = _a.uploadFileLabelExt, uploadFileLabelExt = _h === void 0 ? "or drag and drop" : _h;
    var watch = formRef.watch, setValue = formRef.setValue, register = formRef.register;
    var onFileChange = _onFileChange;
    var onClear = _onClear;
    if (!onFileChange) {
        onFileChange = function (acceptedFile) {
            setValue(name, acceptedFile);
        };
    }
    if (!_onClear) {
        onClear = function () { return setValue(name, undefined); };
    }
    var onDrop = React.useCallback(function (acceptedFiles) {
        if (onFileChange) {
            onFileChange(acceptedFiles[0]);
        }
    }, [onFileChange]);
    var _j = Rd.useDropzone(__assign(__assign({}, options), { onDrop: onDrop })), getRootProps = _j.getRootProps, getInputProps = _j.getInputProps, isDragActive = _j.isDragActive;
    var file = watch(name);
    var preview = _preview;
    if (typeof file === "string") {
        preview = {
            url: file,
        };
        file = undefined;
    }
    if (file) {
        file.preview = URL.createObjectURL(file);
    }
    React.useEffect(function () { return function () {
        // revoke the data uris to avoid memory leaks
        if (file) {
            URL.revokeObjectURL(file.preview);
        }
    }; }, [file]);
    // wrapper classes
    var wrapperClasses = classnames_1.default("focus:bg-gray-400 relative cursor-pointer", fieldClasses);
    var rootClasses = classnames_1.default("mt-2 flex justify-center px-6 py-3 border-2 border-gray-300", "border-dashed rounded-md hover:border-gray-500 focus:outline-none");
    var previewClasses = classnames_1.default("mt-2 flex justify-center p-2 border-2 bg-gray-100 border-gray-100 border-dashed rounded-md");
    var uploadClasses = classnames_1.default("font-medium text-gray-600 transition duration-150 ease-in-out", "hover:text-gray-500 focus:outline-none focus:underline");
    return (React.createElement("div", { className: wrapperClasses },
        React.createElement("label", { htmlFor: name, className: "block text-sm leading-5 font-medium text-gray-700" }, label),
        !preview && !file && (React.createElement("div", __assign({}, getRootProps(), { className: rootClasses }),
            React.createElement("div", { className: "text-center" },
                React.createElement(Hi.CloudUploadIcon, { className: "mx-auto h-8 w-8 text-gray-400" }),
                React.createElement("p", { className: "mt-1 text-sm text-gray-600" },
                    isDragActive && React.createElement("span", null, dropFileLabel),
                    !isDragActive && (React.createElement("span", null,
                        React.createElement("button", { type: "button", className: uploadClasses }, uploadFileLabel),
                        " ",
                        uploadFileLabelExt))),
                React.createElement("p", { className: "mt-1 text-xs text-gray-500" }, fileFormatLabel)))),
        !preview && file && (React.createElement("div", __assign({}, getRootProps(), { className: previewClasses }),
            React.createElement("img", { className: "object-contain h-20 w-full", src: file.preview, alt: file.name }))),
        preview && (React.createElement("div", __assign({}, getRootProps(), { className: previewClasses }),
            React.createElement("img", { className: "object-contain h-20 w-full", src: "" + preview.url, alt: preview === null || preview === void 0 ? void 0 : preview.name }))),
        React.createElement("input", __assign({}, register(name), getInputProps())),
        !preview && file && React.createElement(ClearButton, { onClear: onClear }),
        preview && React.createElement(ClearButton, { onClear: onClear })));
};
exports.FileUploadField = FileUploadField;
exports.default = exports.FileUploadField;
//# sourceMappingURL=FileUpload.field.js.map