import { TextareaHTMLAttributes } from "react";
import { UseFormReturn } from "react-hook-form";
export interface TextareaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    formRef: UseFormReturn<any>;
    name: string;
    label: string;
    subLabel?: string;
    wrapperClasses?: string;
    t?: (key: string, values?: {
        [key: string]: any;
    }) => string;
}
export declare const TextareaField: (props: TextareaFieldProps) => JSX.Element;
export default TextareaField;
