import { FunctionComponent } from "react";
import { ReactNode } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";
interface PostalAddressFormState {
    open?: boolean;
}
interface AddressLabelItem {
    label: string;
    subLabel?: string;
}
export interface PostalAddressFormProps {
    formRef: UseFormReturn<FieldValues>;
    wrapperClasses?: string;
    toggleable?: boolean;
    fieldName?: string;
    heading?: string;
    subheading?: string;
    children?: ReactNode;
    labelsList?: {
        [key: string]: AddressLabelItem;
    };
    countriesList?: Array<{
        label: string;
        value: string;
    }>;
    stateOrProvincesList: Array<{
        label: string;
        value: string;
    }>;
}
export declare const PostalAddressForm: FunctionComponent<PostalAddressFormState & PostalAddressFormProps>;
export {};
