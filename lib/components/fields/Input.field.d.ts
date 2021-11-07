import * as React from "react";
import * as Rhf from "react-hook-form";
export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    formRef: Rhf.UseFormReturn<Rhf.FieldValues>;
    name: string;
    label: string;
    disabled?: boolean;
    subLabel?: string;
    wrapperClasses?: string;
    validationErrorLabel?: string;
}
export declare const InputField: (props: InputFieldProps) => JSX.Element;
export default InputField;
