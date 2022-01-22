import * as React from "react";
import { DropzoneOptions, FileRejection } from "react-dropzone";
interface ImagesFormProps {
    fieldName?: string;
    heading: string;
    subheading: string;
    previews?: Array<{
        id: string;
        name: string;
        url: string;
    }>;
    labelsList?: {
        [key: string]: string;
    };
    wrapperClasses?: string;
    options?: DropzoneOptions;
    onFileChange: (files: Array<File>) => void;
    onRemove: (id: string) => void;
}
interface RejectedImagesProps {
    labelsList: {
        [key: string]: string;
    };
    rejectedImages: Array<FileRejection>;
}
interface PreviewProps {
    id: string;
    name: string;
    url: string;
    onRemove: (id: string) => void;
}
export declare const Preview: React.FunctionComponent<PreviewProps>;
export declare const RejectedImages: React.FunctionComponent<RejectedImagesProps>;
export declare const ImagesForm: React.FunctionComponent<ImagesFormProps>;
export default ImagesForm;
