import * as React from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";
export interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    formRef: UseFormReturn<FieldValues>;
    wrapperClasses?: string;
    label: string;
    name: string;
    subLabel: string;
    disabled?: boolean;
    options: Array<{
        label: string;
        value: string;
    }>;
    validationErrorLabel?: string;
}
export declare const SelectField: React.FunctionComponent<SelectFieldProps>;
