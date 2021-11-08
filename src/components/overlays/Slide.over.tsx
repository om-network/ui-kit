import * as Hui from "@headlessui/react";
import classNames from "classnames";
import * as React from "react";

import { PositionType } from "../../enums/positionType.enum";

export interface SlideOverProps {
    onClose: () => void;
    width?: "max-w-sm" | "max-w-md" | "max-w-full";
    position?: PositionType.leftmid | PositionType.rightmid;
    children: React.ReactNode;
}

export interface SlideOverFooterProps {
    children: React.ReactNode;
    className?: string;
}

export interface SlideOverHeaderProps {
    title: string;
    description?: string;
    children?: React.ReactNode;
}

export const SlideOverHeader = ({ title, description, children }: SlideOverHeaderProps) => (
    <div className="py-6 px-4 bg-gray-100 sm:px-6">
        <div className="flex items-center justify-between">
            <Hui.Dialog.Title className="text-lg font-medium text-gray-600">{title}</Hui.Dialog.Title>
            {children}
        </div>
        {description && (
            <div className="mt-2">
                <p className="text-xs text-gray-600">{description}</p>
            </div>
        )}
    </div>
);

export const SlideOverFooter = ({ children, className = "justify-end" }: SlideOverFooterProps) => (
    <div className={classNames("flex-shrink-0 px-4 py-4 flex bg-gray-100", className)}>{children}</div>
);

export const SlideOver = ({ children, onClose, width = "max-w-md", position = PositionType.leftmid }: SlideOverProps) => {
    const contentClasses = classNames("fixed items-center inset-y-0 max-w-full flex", {
        "pr-16 left-0": position === PositionType.leftmid,
        "pl-16 right-0": position === PositionType.rightmid
    });

    const transitionProps = {
        enterFrom: position === PositionType.leftmid ? "translate-x-full" : "translate-x-0",
        enterTo: position === PositionType.leftmid ? "translate-x-0" : "translate-x-full",
        leaveFrom: position === PositionType.leftmid ? "translate-x-0" : "translate-x-full",
        leaveTo: position === PositionType.leftmid ? "translate-x-full" : "translate-x-0"
    };

    return (
        <Hui.Transition.Root show as={React.Fragment}>
            <Hui.Dialog as="div" static className="fixed inset-0 overflow-hidden z-50" open onClose={onClose}>
                <div className="absolute inset-0 overflow-hidden">
                    <Hui.Dialog.Overlay className="absolute inset-0 bg-black opacity-10" />
                    <div className={contentClasses}>
                        <Hui.Transition.Child
                            as={React.Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            {...transitionProps}
                        >
                            <div className={classNames("w-screen", width)}>{children}</div>
                        </Hui.Transition.Child>
                    </div>
                </div>
            </Hui.Dialog>
        </Hui.Transition.Root>
    );
};

export default SlideOver;
