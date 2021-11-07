import { InputField } from "@om-network/uikit";
import classNames from "classnames";
import React, { FunctionComponent, MouseEvent, useState } from "react";
import { ReactNode } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";
import states from "states-us";

import { t } from "../../common/locale.config";
import { SelectField } from "../fields/Select.field";

interface PostalAddressFormState {
    open?: boolean;
}

interface PostalAddressFormProps {
    formRef: UseFormReturn<FieldValues>;
    togglable?: boolean;
    fieldName?: string;
    heading?: string;
    subheading?: string;
    children?: ReactNode;
    seperatorClasses?: string;
    fieldClasses?: string;
}

export const PostalAddressForm: FunctionComponent<PostalAddressFormState & PostalAddressFormProps> = ({
    formRef,
    heading,
    subheading,
    children,
    fieldName = "postalAddress",
    fieldClasses = "pt-4 mt-6",
    seperatorClasses = "border-t border-gray-200",
    togglable = false
}) => {
    // set form
    const [open, setOpen] = useState<boolean>(true);

    const onOpen = (e: MouseEvent<HTMLOrSVGElement>) => {
        e.preventDefault();
        setOpen(!open);
    };

    const containerClasses = classNames(fieldClasses, seperatorClasses);

    let showDetail = false;
    if (open || togglable === false || (open && togglable)) {
        showDetail = true;
    }

    const stateOptions = states.map((state) => {
        return {
            label: state.name,
            value: state.abbreviation
        };
    });

    const detail = (
        <div className="mt-4 mb-2">
            <InputField formRef={formRef} type="text" name={`${fieldName}.streetAddress`} label={t("Street Address")} subLabel={t("The street address.")} />

            <div className="flex">
                <InputField
                    wrapperClasses="mr-2 w-2/5"
                    formRef={formRef}
                    type="text"
                    name={`${fieldName}.addressLocality`}
                    label={t("City or town")}
                    subLabel={t("Locality in which the street address is.")}
                />

                <SelectField
                    formRef={formRef}
                    fieldClasses="mr-2 w-2/5"
                    label={t("State or Province")}
                    subLabel={t("State or province. eg, California")}
                    options={stateOptions}
                    name={`${fieldName}.addressRegion`}
                />
                <InputField
                    formRef={formRef}
                    wrapperClasses="w-1/5"
                    type="text"
                    name={`${fieldName}.postalCode`}
                    placeholder="94043"
                    label={t("Postal Code")}
                    subLabel={t("Postal or Zip code")}
                />
            </div>

            <SelectField
                formRef={formRef}
                label={t("Country")}
                subLabel={t("The country. Provide the two-letter ISO 3166-1 alpha-2 country code.")}
                options={[
                    { label: "United States", value: "US" },
                    { label: "Canada", value: "CA" }
                ]}
                name={`${fieldName}.addressCountry`}
            />

            {children}
        </div>
    );

    return (
        <div className={containerClasses}>
            <div>
                <div className="flex items-center justify-between">
                    {heading && <h3 className="text-lg leading-6 font-medium text-gray-900">{heading}</h3>}
                    {togglable && (
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
