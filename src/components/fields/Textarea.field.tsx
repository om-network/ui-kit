import classNames from "classnames";
import * as React from "react";
import * as Rhf from "react-hook-form";

export interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  formRef: Rhf.UseFormReturn<any>;
  name: string;
  label: string;
  subLabel?: string;
  disabled?: boolean;
  wrapperClasses?: string;
  validationErrorLabel?: string;
}

export const TextareaField = (props: TextareaFieldProps) => {
  const { formRef, label, subLabel, name, wrapperClasses: classes, disabled = false,validationErrorLabel = "A validation error has occurred", ...textareaProps } = props;

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
          <textarea {...register(name)} id={name} {...textareaProps} className="textarea" />
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

export default TextareaField;
