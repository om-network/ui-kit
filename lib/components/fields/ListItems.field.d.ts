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
export interface ItemFieldProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
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
export interface ListItemsFieldToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
    last?: boolean;
    index: number;
    children: React.ReactNode;
}
export declare const FieldsetField: ({ formRef, name, value, index, itemClasses, label, placeholderLabel, urlLabel, urlPlaceholderLabel, }: ItemFieldProps) => JSX.Element;
export declare const ListItemsFieldToolbar: ({ children, last, index, onAdd, onRemove, }: ListItemsFieldToolbarProps & ListItemsFieldDispatch) => JSX.Element;
export declare const ListItemsField: (props: ListItemsFieldProps & ListItemsFieldDispatch) => JSX.Element;
export default ListItemsField;
