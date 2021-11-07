/// <reference types="react" />
import * as Rhf from "react-hook-form";
export interface RadioGroupFieldProps {
    formRef: Rhf.UseFormReturn<Rhf.FieldValues>;
    disabled?: boolean;
    name: string;
    heading: string;
    subheading?: string;
    wrapperClasses?: string;
    options: Array<{
        itemname: string;
        title: string;
        description: string;
    }>;
}
export interface RadioGroupFieldItemProps {
    formRef: Rhf.UseFormReturn<any>;
    name: string;
    disabled?: boolean;
    itemname: string;
    title: string;
    description: string;
}
export declare const RadioGroupFieldItem: ({ formRef, title, disabled, description, itemname, name }: RadioGroupFieldItemProps) => JSX.Element;
export declare const RadioGroupField: ({ name, wrapperClasses: classes, heading, disabled, formRef, options, subheading }: RadioGroupFieldProps) => JSX.Element;
export default RadioGroupField;
