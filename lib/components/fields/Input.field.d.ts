import * as React from "react";
import * as Rhf from "react-hook-form";
export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    formRef: Rhf.UseFormReturn<any>;
    name: string;
    label: string;
    subLabel?: string;
    wrapperClasses?: string;
    t?: (key: string, values?: {
        [key: string]: any;
    }) => string;
}
export declare const InputField: (props: InputFieldProps) => JSX.Element;
export default InputField;
