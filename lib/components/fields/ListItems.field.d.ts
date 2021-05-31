import { HTMLAttributes, ReactNode } from "react";
import { UseFormReturn } from "react-hook-form";
export interface LinkItem {
    label: string;
    url: string;
}
export interface ResourceItem {
    key?: string;
    heading: string;
    items: Array<LinkItem>;
}
export interface ListItemsFieldProps extends HTMLAttributes<HTMLDivElement> {
    formRef: UseFormReturn<any>;
    name: string;
    label?: string;
    max?: number;
    canCollapse?: boolean;
    collapsed?: boolean;
    subLabel?: string;
    children?: ReactNode;
    wrapperClasses?: string;
}
export interface ListItemsFieldDispatch {
    onAdd?: () => void;
    onRemove?: (index: number) => void;
}
interface ListItemsFieldToolbarProps extends HTMLAttributes<HTMLDivElement> {
    last?: boolean;
    index: number;
    children: ReactNode;
}
export declare const ListItemsFieldToolbar: ({ children, last, index, onAdd, onRemove, }: ListItemsFieldToolbarProps & ListItemsFieldDispatch) => JSX.Element;
export declare const ListItemsField: (props: ListItemsFieldProps & ListItemsFieldDispatch) => JSX.Element;
export default ListItemsField;
