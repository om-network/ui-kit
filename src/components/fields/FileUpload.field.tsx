import { CloudUploadIcon, TrashIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import React, { FunctionComponent, MouseEvent, useCallback, useEffect } from "react";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import { UseFormReturn } from "react-hook-form";

export interface FileUploadFieldProps {
  formRef: UseFormReturn<any>;
  name: string;
  label: string;
  preview?: {
    name?: string;
    url: string;
  };
  options?: DropzoneOptions;
  fieldClasses?: string;
  fileFormatLabel?: string;
  dropFileLabel?: string;
  uploadFileLabel?: string;
  uploadFileLabelExt?: string;
}

export interface FileUploadFieldDispatch {
  onFileChange?: (file: File) => void;
  onClear?: (e: MouseEvent<HTMLButtonElement>) => void;
}

interface ClearButtonProps {
  label?: string;
}

interface ClearButtonDispatch {
  onClear?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const ClearButton: FunctionComponent<ClearButtonProps & ClearButtonDispatch> = ({ onClear, label = "Clear" }) => {
  const btnClasses = classNames(
    "inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md",
    "text-gray-700 bg-white transition ease-in-out duration-150",
    "hover:border-gray-700 focus:outline-none focus:border-gray-700"
  );
  return (
    <div className="absolute bottom-0 right-0 mr-1 mb-1">
      <button onClick={onClear} type="button" className={btnClasses}>
        <TrashIcon className="-ml-0.5 mr-2 h-4 w-4" />
        {label}
      </button>
    </div>
  );
};

export const FileUploadField: FunctionComponent<FileUploadFieldProps & FileUploadFieldDispatch> = ({
  label,
  options = { accept: "image/png, image/jpeg, image/gif", maxSize: 2000000 },
  fieldClasses = "my-0",
  formRef,
  preview: _preview,
  name = "fileupload",
  onFileChange: _onFileChange,
  onClear: _onClear,
  fileFormatLabel = "PNG, JPG, GIF up to 2MB",
  dropFileLabel = "Drop the files here.",
  uploadFileLabel = "Upload a file",
  uploadFileLabelExt = "or drag and drop",
}) => {
  const { watch, setValue, register } = formRef;

  let onFileChange = _onFileChange;
  let onClear = _onClear;

  if (!onFileChange) {
    onFileChange = (acceptedFile: File) => {
      setValue(name, acceptedFile);
    };
  }

  if (!_onClear) {
    onClear = () => setValue(name, undefined);
  }

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (onFileChange) {
        onFileChange(acceptedFiles[0]);
      }
    },
    [onFileChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ ...options, onDrop });
  let file = watch(name);
  let preview = _preview;

  if (typeof file === "string") {
    preview = {
      url: file,
    };
    file = undefined;
  }

  if (file) {
    file.preview = URL.createObjectURL(file);
  }

  console.log("FILE", file);

  useEffect(
    () => () => {
      // revoke the data uris to avoid memory leaks
      if (file) {
        URL.revokeObjectURL((file as any).preview);
      }
    },
    [file]
  );

  // wrapper classes
  const wrapperClasses = classNames("focus:bg-gray-400 relative cursor-pointer", fieldClasses);
  const rootClasses = classNames(
    "mt-2 flex justify-center px-6 py-3 border-2 border-gray-300",
    "border-dashed rounded-md hover:border-gray-500 focus:outline-none"
  );
  const previewClasses = classNames(
    "mt-2 flex justify-center p-2 border-2 bg-gray-100 border-gray-100 border-dashed rounded-md"
  );
  const uploadClasses = classNames(
    "font-medium text-gray-600 transition duration-150 ease-in-out",
    "hover:text-gray-500 focus:outline-none focus:underline"
  );

  return (
    <div className={wrapperClasses}>
      <label htmlFor={name} className="block text-sm leading-5 font-medium text-gray-700">
        {label}
      </label>
      {!preview && !file && (
        <div {...getRootProps()} className={rootClasses}>
          <div className="text-center">
            <CloudUploadIcon className="mx-auto h-8 w-8 text-gray-400" />
            <p className="mt-1 text-sm text-gray-600">
              {isDragActive && <span>{dropFileLabel}</span>}
              {!isDragActive && (
                <span>
                  <button type="button" className={uploadClasses}>
                    {uploadFileLabel}
                  </button>{" "}
                  {uploadFileLabelExt}
                </span>
              )}
            </p>
            <p className="mt-1 text-xs text-gray-500">{fileFormatLabel}</p>
          </div>
        </div>
      )}

      {!preview && file && (
        <div {...getRootProps()} className={previewClasses}>
          <img className="object-contain h-20 w-full" src={file.preview} alt={file.name} />
        </div>
      )}

      {preview && (
        <div {...getRootProps()} className={previewClasses}>
          <img className="object-contain h-20 w-full" src={`${preview.url}`} alt={preview?.name} />
        </div>
      )}

      <input {...register(name)} {...getInputProps()} />

      {!preview && file && <ClearButton onClear={onClear} />}
      {preview && <ClearButton onClear={onClear} />}
    </div>
  );
};

export default FileUploadField;
