import classNames from "classnames";
import React, { FunctionComponent, MouseEvent, useState } from "react";

interface OptionalFeaturesFormState {
    open?: boolean;
}

interface FeaturesFormProps {
    form: any;
    togglable?: boolean;
    gridClasses?: string;
    heading: string;
    subheading: string;
    seperator?: boolean;
    fieldClasses?: string;
    items: Array<{
        label: string;
        sublabel?: string;
        name: string;
    }>;
}

export const FeaturesForm: FunctionComponent<OptionalFeaturesFormState & FeaturesFormProps> = ({
    form,
    heading,
    subheading,
    items,
    fieldClasses = "pt-8",
    gridClasses = "",
    togglable = false,
    seperator = false
}) => {
    // set form
    const { register, watch, setValue } = form;
    const [open, setOpen] = useState<boolean>(true);

    const values = watch();

    const onOpen = (e: MouseEvent<HTMLOrSVGElement>) => {
        e.preventDefault();
        setOpen(!open);
    };

    const containerClasses = classNames(fieldClasses, {
        "border-t border-gray-200": seperator
    });

    const inputClasses = classNames("focus:ring-gray-500 h-4 w-4 text-gray-600 border-gray-300 rounded");

    let showDetail = false;
    if (open || togglable === false || (open && togglable)) {
        showDetail = true;
    }

    const detail = (
        <div className="my-4">
            <fieldset className={gridClasses}>
                {items.map((item, idx) => {
                    return (
                        <div className="mt-4 space-y-4" key={idx}>
                            <div className="relative flex items-start">
                                <div className="flex items-center h-5">
                                    <input id={item.name} name={item.name} ref={register} type="checkbox" className={inputClasses} />
                                </div>
                                <div className="ml-3 text-xs">
                                    <label htmlFor={item.name} className="font-medium text-gray-700 cursor-pointer">
                                        {item.label}
                                    </label>
                                    <p onClick={() => setValue(item.name, !values[item.name])} className="text-gray-500 cursor-pointer">
                                        {item?.sublabel}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </fieldset>
        </div>
    );

    return (
        <div className={containerClasses}>
            <div>
                <div className="flex items-center justify-between">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{heading}</h3>
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
                <p className="mt-2 text-xs text-gray-500">{subheading}</p>
            </div>
            {showDetail && detail}
        </div>
    );
};
