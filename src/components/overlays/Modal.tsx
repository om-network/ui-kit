import * as Hui from "@headlessui/react";
import classNames from "classnames";
import * as React from "react";

export interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
    width?: "max-w-sm" | "max-w-md" | "max-w-full";
}

export interface ModalHeaderProps {}

export interface ModalFooterProps {}

export const Modal: React.FC<ModalProps> = ({ children, width = "max-w-md", onClose }) => {
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
                        <div className={classNames("w-screen", width)}>{children}</div>
                    </Hui.Transition.Child>
                </div>
            </Hui.Dialog>
        </Hui.Transition.Root>
    );
};

export default Modal;
