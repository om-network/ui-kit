import * as React from "react";
import { InputHTMLAttributes } from "react";
import { UseFormReturn } from "react-hook-form";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  formRef: UseFormReturn<any>;
  name: string;
  label: string;
  subLabel?: string;
  wrapperClasses?: string;
  t?: (key: string, values?: { [key: string]: any }) => string;
}

export const InputField = (props: InputFieldProps) => {
  const { formRef, label, subLabel, name, wrapperClasses, t, ...inputProps } = props;

  const {
    formState: { errors },
    register,
  } = formRef;

  return (
    <div className={wrapperClasses}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-900">
        {label}
        <div className="mt-1">
          <input {...register(name)} id={name} {...inputProps} className="input" />
        </div>
      </label>
      {errors[name] && (
        <p className="mt-2 text-sm text-red-500">
          * {errors[name].message || (t && t(`${name}: A validation errors occured.`))}
        </p>
      )}
      {subLabel && <p className="mt-2 text-xs text-gray-500">{subLabel}</p>}
    </div>
  );
};

export default InputField;
