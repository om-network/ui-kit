import * as React from "react";
import * as Rhf from "react-hook-form";
export interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    formRef: Rhf.UseFormReturn<Rhf.FieldValues>;
    wrapperClasses?: string;
    label: string;
    name: string;
    subLabel: string;
    disabled?: boolean;
    options: Array<{
        label: string;
        value: string | number;
    }>;
    validationErrorLabel?: string;
}
export declare const SelectField: React.FunctionComponent<SelectFieldProps>;
