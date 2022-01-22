import * as React from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";
export interface ToggleFieldProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    formRef: UseFormReturn<FieldValues>;
    name: string;
    label: string;
    subLabel: string;
    fieldClasses?: string;
}
export declare const ToggleField: React.FunctionComponent<ToggleFieldProps>;
