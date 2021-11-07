import * as React from "react";
import * as Rhf from "react-hook-form";
export interface ToggleFieldProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    formRef: Rhf.UseFormReturn<Rhf.FieldValues>;
    name: string;
    label: string;
    subLabel: string;
    fieldClasses?: string;
}
export declare const ToggleField: React.FunctionComponent<ToggleFieldProps>;
