import classNames from "classnames";
import * as React from "react";
import * as Rhf from "react-hook-form";

export interface ToggleFieldProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    formRef: Rhf.UseFormReturn<Rhf.FieldValues>;
    name: string;
    label: string;
    subLabel: string;
    fieldClasses?: string;
}

export const ToggleField: React.FunctionComponent<ToggleFieldProps> = ({ label, subLabel, name, fieldClasses = "py-3", formRef }) => {
    const wrapperClasses = classNames("flex items-center justify-between sm:col-span-6 border-gray-200", fieldClasses);

    const { setValue, getValues, watch, register } = formRef;
    const watchValue = watch(name) === "true" || watch(name) === true;

    // button classes
    const buttonClasses = classNames("relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent", {
        "rounded-full cursor-pointer transition-colors ease-in-out duration-200": true,
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500": true,
        "bg-gray-600": watchValue,
        "bg-gray-200": !watchValue
    });

    // ariaClasses
    const ariaClasses = classNames("pointer-events-none inline-block h-5 w-5 rounded-full bg-white", {
        "shadow transform ring-0 transition ease-in-out duration-200": true,
        "translate-x-0": !watchValue,
        "translate-x-5": watchValue
    });

    const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        const value = getValues(name) === "true" || watch(name) === true;
        setValue(name, value ? "false" : "true");
    };

    return (
        <div className={wrapperClasses} onClick={onClick}>
            <span className="flex-grow flex flex-col" id={name}>
                <span className="text-sm font-medium text-gray-900">{label}</span>
                <span className="text-xs text-gray-500">{subLabel}</span>
            </span>
            <button {...register(name)} className={buttonClasses} aria-pressed="false" aria-labelledby={name}>
                <span className="sr-only">{label}</span>
                <span aria-hidden="true" className={ariaClasses}></span>
            </button>
        </div>
    );
};
