import classNames from "classnames";
import * as React from "react";
import * as Rhf from "react-hook-form";

export interface RadioGroupFieldProps {
  formRef: Rhf.UseFormReturn<any>;
  disabled?: boolean;
  name: string;
  heading: string;
  subheading?: string;
  wrapperClasses?: string;
  options: Array<{ itemname: string; title: string; description: string }>;
}

export interface RadioGroupFieldItemProps {
  formRef: Rhf.UseFormReturn<any>;
  name: string;
  disabled?: boolean;
  itemname: string;
  title: string;
  description: string;
}

export const RadioGroupFieldItem = ({
  formRef,
  title,
  disabled = false,
  description,
  itemname,
  name,
}: RadioGroupFieldItemProps) => {
  const { register } = formRef;
  const inputLabel = `${itemname}_label`;
  const inputDescription = `${itemname}_description`;

  return (
    <div>
      <div className="relative flex items-start">
        <div className="absolute flex items-center h-5">
          <input
            type="radio"
            disabled={disabled}
            {...register(name)}
            id={inputLabel}
            value={itemname}
            aria-describedby={inputDescription}
            className="focus:ring-gray-500 h-4 w-4 text-gray-600 border-gray-300"
          />
        </div>
        <div className="pl-7 text-xs">
          <label htmlFor={inputLabel} className="font-medium text-gray-900 cursor-pointer">
            {title}
            <p id={inputDescription} className="text-gray-500 font-normal">
              {description}
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export const RadioGroupField = ({
  name,
  wrapperClasses: classes,
  heading,
  disabled = false,
  formRef,
  options,
  subheading,
}: RadioGroupFieldProps) => {
  const wrapperClasses = classNames(classes, {
    "opacity-40 pointer-events-none": disabled,
  });
  return (
    <div className={wrapperClasses}>
      <fieldset className="mt-4 space-y-5">
        <div className="flex flex-col justify-between">
          <legend className="text-sm leading-6 font-medium text-gray-900">{heading}</legend>
          <p className="mt-2 text-xs text-gray-500">{subheading}</p>
        </div>
        {options.map((option) => (
          <RadioGroupFieldItem key={option.itemname} formRef={formRef} disabled={disabled} name={name} {...option} />
        ))}
      </fieldset>
    </div>
  );
};

export default RadioGroupField;
