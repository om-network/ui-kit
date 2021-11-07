import classNames from "classnames";
import React, { FunctionComponent, MouseEvent, useState } from "react";

interface FieldListFormProps {
    formRef: any;
    heading: string;
    subheading: string;
    seperatorClasses?: string;
    togglable?: boolean;
    fieldClasses?: string;
    items: Array<{
        label: string;
        inputType?: string;
        name: string;
        description: string;
    }>;
}

export const FieldListForm: FunctionComponent<FieldListFormProps> = ({ formRef, heading, subheading, items, seperatorClasses = "border-b border-gray-200", fieldClasses = "pb-6", togglable = false }) => {
    const [open, setOpen] = useState<boolean>(true);

    const containerClasses = classNames(fieldClasses, seperatorClasses);

    const onOpen = (e: MouseEvent<HTMLOrSVGElement>) => {
        e.preventDefault();
        setOpen(!open);
    };

    const labelClasses = classNames("flex-1 inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm");
    const inputClasses = classNames("flex-grow px-3 py-2 rounded-none rounded-r-md focus:ring-gray-500 focus:border-gray-500 focus:ring-0 sm:text-sm border-gray-300");

    let showDetail = false;
    if (open || togglable === false || (open && togglable)) {
        showDetail = true;
    }

    const detail = (
        <div className="mt-4 mb-2">
            {items.map((item, idx: number) => {
                return (
                    <div key={idx} className="my-2 flex rounded-md shadow-sm ">
                        <span className={labelClasses}>{item.label}</span>
                        <input ref={formRef.register} type={item.inputType || "number"} min={0} name={item.name} id={item.name} placeholder={item.description} className={inputClasses} />
                    </div>
                );
            })}
        </div>
    );

    return (
        <div className={containerClasses}>
            <div>
                <div className="flex items-center justify-between">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{heading}</h3>
                    {togglable && (
                        <svg onClick={onOpen} className="flex-shrink-0 w-6 h-6 text-gray-400 hover:text-gray-500 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                        </svg>
                    )}
                </div>
                <p className="mt-2 text-xs text-gray-500">{subheading}</p>
            </div>
            {showDetail && detail}
        </div>
    );
};
