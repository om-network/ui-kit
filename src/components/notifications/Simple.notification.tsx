import * as Hui from "@headlessui/react";
import * as Hi from "@heroicons/react/outline";
import * as His from "@heroicons/react/solid";
import classNames from "classnames";
import * as React from "react";

import { IntentType } from "../../enums/intentType.enum";
import { NotificationProps } from "../../interfaces/notification.interface";


export interface SimpleNotificationModel {
    title: string;
    description?: string;
}

export const SimpleNotification = ({ id, model, intent = IntentType.none, closeLabel = "Close", onClose, timer: _timer = 3000 }: NotificationProps) => {
    const { title, description } = model as SimpleNotificationModel;

    // auto close after 3 seconds
    React.useEffect(() => {
        const timer = setTimeout(() => {
            if (onClose) {
                onClose(id);
            }
        }, _timer);
        return () => clearTimeout(timer);
    }, [onClose]);

    const wrapperClasses = "max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden";
    const buttonClasses = "bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none";
    const iconClasses = classNames("h-6 w-6", intent !== IntentType.none && `text-${intent}-400`);
    return (
        <Hui.Transition
            show
            as={React.Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className={wrapperClasses}>
                <div className="p-4">
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <Hi.CheckCircleIcon className={iconClasses} aria-hidden="true" />
                        </div>
                        <div className="ml-3 w-0 flex-1 pt-0.5">
                            <p className="text-sm font-medium text-gray-900">{title}</p>
                            {model.description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
                        </div>
                        <div className="ml-4 flex-shrink-0 flex">
                            <button className={buttonClasses} type="button" onClick={() => onClose(id)}>
                                <span className="sr-only">{closeLabel}</span>
                                <His.XIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Hui.Transition>
    );
};

export default SimpleNotification;
