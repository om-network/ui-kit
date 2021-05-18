import { InputHTMLAttributes } from "react";
import { UseFormReturn } from "react-hook-form";
interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    formRef: UseFormReturn<any>;
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
