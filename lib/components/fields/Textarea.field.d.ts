import * as React from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";
export interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    formRef: UseFormReturn<FieldValues>;
    name: string;
    label: string;
    subLabel?: string;
    disabled?: boolean;
    wrapperClasses?: string;
    validationErrorLabel?: string;
}
export declare const TextareaField: (props: TextareaFieldProps) => JSX.Element;
export default TextareaField;
