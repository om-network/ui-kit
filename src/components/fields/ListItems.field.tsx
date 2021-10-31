import * as Hi from "@heroicons/react/outline";
import classNames from "classnames";
import * as L from "lodash";
import * as React from "react";
import * as Rhf from "react-hook-form";

export interface LinkItem {
  label: string;
  url: string;
}

export interface ResourceItem {
  key?: string;
  heading: string;
  items: Array<LinkItem>;
}

export interface ListItemsFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  formRef: Rhf.UseFormReturn<any>;
  name: string;
  label?: string;
  max?: number;
  canCollapse?: boolean;
  collapsed?: boolean;
  subLabel?: string;
  children?: React.ReactNode;
  wrapperClasses?: string;
}

export interface ListItemsFieldDispatch {
  onAdd?: () => void;
  onRemove?: (index: number) => void;
}

interface ItemFieldProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
  formRef: Rhf.UseFormReturn<any>;
  itemClasses?: string;
  index?: number;
  name: string;
  value: LinkItem;
  label?: string;
  placeholderLabel?: string;
  urlLabel?: string;
  urlPlaceholderLabel?: string;
}

interface ListItemsFieldToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
  last?: boolean;
  index: number;
  children: React.ReactNode;
}

const FieldsetField = ({
  formRef,
  name,
  value,
  index = 0,
  itemClasses,
  label = "Label",
  placeholderLabel = "label",
  urlLabel = "URL",
  urlPlaceholderLabel = "example-page",
}: ItemFieldProps) => {
  const { register } = formRef;

  const labelName = `${name}.${index}.label`;
  const urlName = `${name}.${index}.url`;
  const fieldClasses = classNames("flex flex-row py-1.5", itemClasses);

  return (
    <fieldset className={fieldClasses}>
      <label htmlFor={labelName} className="w-2/5 mr-2">
        <span className="sr-only">{label}</span>
        <input
          type="text"
          {...register(labelName)}
          defaultValue={value.label}
          id={labelName}
          onChange={undefined}
          placeholder={placeholderLabel}
          className="input py-1"
        />
      </label>
      <label htmlFor={urlName} className="w-3/5">
        <span className="sr-only">{urlLabel}</span>
        <input
          type="url"
          {...register(urlName)}
          defaultValue={value.url}
          id={urlName}
          onChange={undefined}
          placeholder={urlPlaceholderLabel}
          className="input py-1"
        />
      </label>
    </fieldset>
  );
};

export const ListItemsFieldToolbar = ({
  children,
  last,
  index,
  onAdd,
  onRemove,
}: ListItemsFieldToolbarProps & ListItemsFieldDispatch) => (
  <div className="flex justify-center items-center">
    {children}
    <label htmlFor="action" className="ml-2">
      <span>
        {last && <Hi.PlusIcon className="h-6 w-6 text-gray-400 hover:text-gray-600 cursor-pointer" onClick={onAdd} />}
        {!last && (
          <Hi.MinusCircleIcon
            className="h-6 w-6 text-red-800 hover:text-red-600 cursor-pointer"
            onClick={() => onRemove && onRemove(index)}
          />
        )}
      </span>
    </label>
  </div>
);

export const ListItemsField = (props: ListItemsFieldProps & ListItemsFieldDispatch) => {
  const {
    formRef,
    label,
    subLabel,
    name,
    max = 5,
    wrapperClasses,
    children,
    collapsed = false,
    canCollapse = false,
  } = props;
  const [open, setOpen] = React.useState<boolean>(!collapsed);
  const { fields, append, remove } = Rhf.useFieldArray({
    control: formRef.control,
    name,
  });

  React.useEffect(() => {
    if (fields === undefined || fields.length === 0) {
      const defaultValues = L.range(max).map(() => [{ label: "", url: "" }]);
      formRef.setValue(name, defaultValues);
    }
  }, [fields]);

  return (
    <div className={wrapperClasses}>
      {label && <h3 className="block text-sm font-medium text-gray-900">{label}</h3>}
      {subLabel && (
        <div className="flex flex-row">
          <p className="text-xs text-gray-600">{subLabel}</p>
          {canCollapse && (
            <span aria-hidden onClick={() => setOpen(!open)}>
              <Hi.SelectorIcon className="w-6 h-6 text-gray-600 cursor-pointer" />
            </span>
          )}
        </div>
      )}
      {open && (
        <div className="pt-4">
          {children}
          {fields?.map((field, idx) => {
            const isLast = idx === fields.length - 1 && fields.length < max;
            return (
              <ListItemsFieldToolbar
                key={field.id}
                index={idx}
                last={isLast}
                onAdd={() => append({ label: "", url: "" })}
                onRemove={(index) => remove(index)}
              >
                <FieldsetField index={idx} formRef={formRef} value={field as any} name={name} />
              </ListItemsFieldToolbar>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ListItemsField;
