import { FunctionComponent, MouseEvent } from "react";
import { DropzoneOptions } from "react-dropzone";
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
export declare const FileUploadField: FunctionComponent<FileUploadFieldProps & FileUploadFieldDispatch>;
export default FileUploadField;
