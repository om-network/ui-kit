import * as React from "react";
import * as Rd from "react-dropzone";
import * as Rhf from "react-hook-form";
export interface FileUploadFieldProps {
    formRef: Rhf.UseFormReturn<any>;
    name: string;
    label: string;
    preview?: {
        name?: string;
        url: string;
    };
    options?: Rd.DropzoneOptions;
    fieldClasses?: string;
    fileFormatLabel?: string;
    dropFileLabel?: string;
    uploadFileLabel?: string;
    uploadFileLabelExt?: string;
}
export interface FileUploadFieldDispatch {
    onFileChange?: (file: File) => void;
    onClear?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export declare const FileUploadField: React.FunctionComponent<FileUploadFieldProps & FileUploadFieldDispatch>;
export default FileUploadField;
