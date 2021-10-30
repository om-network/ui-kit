import * as React from "react";
import * as Rhf from "react-hook-form";

export interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  formRef: Rhf.UseFormReturn<any>;
  name: string;
  label: string;
  subLabel?: string;
  wrapperClasses?: string;
  t?: (key: string, values?: { [key: string]: any }) => string;
}

export const TextareaField = (props: TextareaFieldProps) => {
  const { formRef, label, subLabel, name, wrapperClasses, t, ...textareaProps } = props;

  const {
    formState: { errors },
    register,
  } = formRef;
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
          * {errors[name].message || (t && t(`${name}: A validation errors occured.`))}
        </p>
      )}
      {subLabel && <p className="mt-2 text-xs text-gray-500">{subLabel}</p>}
    </div>
  );
};

export default TextareaField;
