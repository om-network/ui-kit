import classNames from "classnames";
import React, { FunctionComponent, SelectHTMLAttributes } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
    formRef: UseFormReturn<FieldValues>;
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

export const SelectField: FunctionComponent<SelectFieldProps> = (props) => {
    const {
        formRef,
        label,
        subLabel,
        disabled = false,
        name,
        value,
        options,
        wrapperClasses: classes = "",
        validationErrorLabel = "A validation error has occurred",
        ...selectProps
    } = props;
    const {
        formState: { errors },
        register
    } = formRef;

    const wrapperClasses = classNames("sm:col-span-6 border-gray-200", classes, {
        "opacity-40 pointer-events-none": disabled
    });

    return (
        <div className={wrapperClasses}>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {label}
                <div className="mt-3">
                    <select {...register(name)} id={name} className="select" {...selectProps}>
                        {options.map((item, idx: any) => (
                            <option key={idx} value={item.value}>
                                {item.label}
                            </option>
                        ))}
                    </select>
                </div>
            </label>
            {errors[name] && <p className="mt-2 text-sm text-red-500">* {errors[name].message || `${name}: ${validationErrorLabel}.`}</p>}
            {subLabel && <p className="mt-2 text-xs text-gray-500">{subLabel}</p>}
        </div>
    );
};
