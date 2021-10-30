import * as React from "react";
import * as Rhf from "react-hook-form";
export interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    formRef: Rhf.UseFormReturn<any>;
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
