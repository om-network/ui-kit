import * as Hui from "@headlessui/react";
import { ExclamationIcon, XIcon } from "@heroicons/react/outline";
import * as React from "react";

export interface ModalProps {
    closeLabel?: string;
    title?: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
    onClose: () => void;
}

export interface ModalPanelProps {
    onClose: () => void;
    closeLabel?: string;
    title?: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}

export interface ModalFooterProps {
    children: React.ReactNode;
    wrapperClasses?: string;
}

export const ModalPanel: React.FC<ModalPanelProps> = ({
    children,
    icon = <ExclamationIcon className="h-6 w-6 text-red-600" aria-hidden="true" />,
    title,
    closeLabel,
    onClose
}) => (
    <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
        <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
            <button
                type="button"
                className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => onClose()}
            >
                <span className="sr-only">{closeLabel}</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
            </button>
        </div>
        <div className="sm:flex sm:items-start">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">{icon}</div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                {title && (
                    <Hui.Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        {title}
                    </Hui.Dialog.Title>
                )}
                {children}
            </div>
        </div>
    </div>
);

export const ModalFooter: React.FC<ModalFooterProps> = (children, wrapperClasses = "bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse") => {
    return <div className={wrapperClasses}>{children}</div>;
};

export const Modal: React.FC<ModalProps> = ({ children, closeLabel = "Close", onClose }) => {
    const cancelButtonRef = React.useRef(null);

    return (
        <Hui.Transition.Root show as={React.Fragment}>
            <Hui.Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={onClose}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <Hui.Transition.Child
                        as={React.Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Hui.Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Hui.Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>
                    <Hui.Transition.Child
                        as={React.Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <ModalPanel onClose={onClose} closeLabel={closeLabel}>
                            {children}
                        </ModalPanel>
                    </Hui.Transition.Child>
                </div>
            </Hui.Dialog>
        </Hui.Transition.Root>
    );
};

export default Modal;
