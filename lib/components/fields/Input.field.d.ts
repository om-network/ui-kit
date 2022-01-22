import * as React from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";
export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    formRef: UseFormReturn<FieldValues>;
    name: string;
    label: string;
    disabled?: boolean;
    subLabel?: string;
    wrapperClasses?: string;
    validationErrorLabel?: string;
}
export declare const InputField: (props: InputFieldProps) => JSX.Element;
export default InputField;
