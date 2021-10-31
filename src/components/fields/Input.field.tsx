import classNames from "classnames";
import * as React from "react";
import * as Rhf from "react-hook-form";

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  formRef: Rhf.UseFormReturn<any>;
  name: string;
  label: string;
  disabled?: boolean;
  subLabel?: string;
  wrapperClasses?: string;
  validationErrorLabel?: string;
}

export const InputField = (props: InputFieldProps) => {
  const { formRef, label, subLabel, name,disabled = false, wrapperClasses: classes = "", validationErrorLabel = "A validation error has occurred", ...inputProps } = props;

  const {
    formState: { errors },
    register,
  } = formRef;
  
  const wrapperClasses = classNames(classes, {
    "opacity-40 pointer-events-none": disabled
});

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
          * {errors[name].message || `${name}: ${validationErrorLabel}.`}
        </p>
      )}
      {subLabel && <p className="mt-2 text-xs text-gray-500">{subLabel}</p>}
    </div>
  );
};

export default InputField;
