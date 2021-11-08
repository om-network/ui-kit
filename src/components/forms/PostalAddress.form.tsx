import React, { FunctionComponent, MouseEvent, useState } from "react";
import { ReactNode } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

import { InputField } from "../fields/Input.field";
import { SelectField } from "../fields/Select.field";

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
        streetAddress: AddressLabelItem;
        addressLocality: AddressLabelItem;
        addressRegion: AddressLabelItem;
        postalCode: AddressLabelItem;
        addressCountry: AddressLabelItem;
    };
    countriesList?: Array<{ label: string; value: string }>;
    stateOrProvincesList: Array<{ label: string; value: string }>;
}

export const PostalAddressForm: FunctionComponent<PostalAddressFormState & PostalAddressFormProps> = ({
    formRef,
    heading,
    subheading,
    children,
    fieldName = "postalAddress",
    stateOrProvincesList,
    wrapperClasses = "",
    labelsList = {
        streetAddress: {
            label: "Street Address",
            subLabel: "The street address."
        },
        addressLocality: {
            label: "City or town",
            subLabel: "Locality in which the street address is."
        },
        addressRegion: {
            label: "State or Province",
            subLabel: "State or province. eg, California"
        },
        postalCode: {
            label: "Postal Code",
            subLabel: "Postal or Zip code"
        },
        addressCountry: {
            label: "Country",
            subLabel: "The country. Provide the two-letter ISO 3166-1 alpha-2 country code"
        }
    },
    countriesList = [
        { label: "United States", value: "US" },
        { label: "Canada", value: "CA" }
    ],
    toggleable = false
}) => {
    // set form
    const [open, setOpen] = useState<boolean>(true);

    const onOpen = (e: MouseEvent<HTMLOrSVGElement>) => {
        e.preventDefault();
        setOpen(!open);
    };

    let showDetail = false;
    if (open || toggleable === false || (open && toggleable)) {
        showDetail = true;
    }

    const detail = (
        <div className="space-y-3">
            <InputField
                formRef={formRef}
                type="text"
                name={`${fieldName}.streetAddress`}
                label={labelsList.streetAddress.label}
                subLabel={labelsList.streetAddress.subLabel}
            />

            <div className="flex">
                <InputField
                    wrapperClasses="mr-2 w-2/5"
                    formRef={formRef}
                    type="text"
                    name={`${fieldName}.addressLocality`}
                    label={labelsList.addressLocality.label}
                    subLabel={labelsList.addressLocality.subLabel}
                />

                <SelectField
                    formRef={formRef}
                    wrapperClasses="mr-2 w-2/5"
                    label={labelsList.addressRegion.label}
                    subLabel={labelsList.addressRegion.subLabel || ""}
                    options={stateOrProvincesList}
                    name={`${fieldName}.addressRegion`}
                />
                <InputField
                    formRef={formRef}
                    wrapperClasses="w-1/5"
                    type="text"
                    name={`${fieldName}.postalCode`}
                    placeholder="94043"
                    label={labelsList.postalCode.label}
                    subLabel={labelsList.postalCode.subLabel}
                />
            </div>

            <SelectField
                formRef={formRef}
                label={labelsList.addressCountry.label}
                subLabel={labelsList.addressCountry.subLabel || ""}
                options={countriesList}
                name={`${fieldName}.addressCountry`}
            />

            {children}
        </div>
    );

    return (
        <div className={wrapperClasses}>
            <div>
                <div className="flex items-center justify-between">
                    {heading && <h3 className="text-lg leading-6 font-medium text-gray-900">{heading}</h3>}
                    {toggleable && (
                        <svg
                            onClick={onOpen}
                            className="flex-shrink-0 w-6 h-6 text-gray-400 hover:text-gray-500 cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                        </svg>
                    )}
                </div>
                {subheading && <p className="mt-2 text-xs text-gray-500">{subheading}</p>}
            </div>
            {showDetail && detail}
        </div>
    );
};
