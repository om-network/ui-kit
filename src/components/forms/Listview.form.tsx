import classNames from "classnames";
import React, { FunctionComponent, MouseEvent } from "react";
import { FieldValues, UseFormMethods } from "react-hook-form";

import { t } from "../../common/locale.config";
import { ListViewItems } from "./Listviewitems.form";

const slug = require("slug");

interface ListViewFormProps {
    formRef: UseFormMethods<FieldValues>;
    seperator?: boolean;
    heading: string;
    subheading: string;
    items: Array<{
        id: string;
        image?: string;
        name: string;
        description: string;
    }>;
    fieldClasses?: string;
    fieldName?: string;
    searchItemLabel?: string;
    addItemsLabel?: string;
    addItemPlaceholder?: string;
    mode?: "single" | "multiple";
    onAdd: () => void;
    onRemove: (entity: string) => void;
}

interface ListViewSearchInputProps {
    addItemPlaceholder?: string;
    searchItemLabel?: string;
    fieldName?: string;
    addItemsLabel?: string;
    onAdd: () => void;
    formRef: UseFormMethods<FieldValues>;
}

const ListViewSearchInput: FunctionComponent<ListViewSearchInputProps> = ({
    formRef,
    fieldName,
    addItemPlaceholder,
    searchItemLabel,
    addItemsLabel,
    onAdd
}) => {
    const { register, errors } = formRef;

    // add item label
    const addItemsId = fieldName || slug(addItemsLabel);
    const addItemsHelperId = `${addItemsId}_helper`;

    // add action
    const _onAdd = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        onAdd();
    };

    return (
        <div className="space-y-1">
            {addItemsLabel && (
                <label htmlFor={addItemsId} className="block text-sm font-medium text-gray-700">
                    {addItemsLabel}
                </label>
            )}
            <p id={addItemsHelperId} className="sr-only">
                {searchItemLabel}
            </p>
            <div className="flex">
                <div className="flex-grow">
                    <input
                        type="text"
                        autoComplete="off"
                        onKeyPress={(e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                            e.key === "Enter" && e.preventDefault();
                        }}
                        name={addItemsId}
                        id={addItemsId}
                        ref={register}
                        className="input"
                        placeholder={addItemPlaceholder}
                        aria-describedby={addItemsHelperId}
                    />
                    {errors[addItemsId] && <p className="mt-2 text-sm text-red-500">{errors[addItemsId] || t("There was an error loading.")}</p>}
                </div>
                <span className="ml-3">
                    <button type="button" className="btn" onClick={_onAdd}>
                        <svg
                            className="-ml-2 mr-1 h-5 w-5 text-gray-400"
                            x-description="Heroicon name: plus"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span>{t("Add")}</span>
                    </button>
                </span>
            </div>
        </div>
    );
};

export const ListViewForm: FunctionComponent<ListViewFormProps> = (props) => {
    const { heading, onRemove, mode = "multiple", subheading, fieldClasses = "pt-6 pb-3", items, seperator = false, ...searchProps } = props;

    const containerClasses = classNames(fieldClasses, {
        "border-t border-gray-200": seperator
    });

    return (
        <div className={containerClasses}>
            <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">{heading}</h3>
                <p className="mt-1 text-xs text-gray-500">{subheading}</p>
            </div>
            <div className="my-4">
                <div className="space-y-2">
                    {(mode === "multiple" || (mode === "single" && items.length === 0)) && <ListViewSearchInput {...searchProps} />}
                    <ListViewItems items={items} actionLabel={t("Remove")} onItemClick={onRemove} />
                </div>
            </div>
        </div>
    );
};
