import * as Hui from "@headlessui/react";
import classNames from "classnames";
import * as React from "react";

export interface SlideOverProps {
  onClose: () => void;
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

export const SlideOver = ({ children, onClose }: SlideOverProps) => (
  <Hui.Transition.Root show as={React.Fragment}>
    <Hui.Dialog as="div" static className="fixed inset-0 overflow-hidden z-50" open onClose={onClose}>
      <div className="absolute inset-0 overflow-hidden">
        <Hui.Dialog.Overlay className="absolute inset-0 bg-black opacity-10" />
        <div className="fixed items-center inset-y-0 pr-16 max-w-full left-0 flex">
          <Hui.Transition.Child
            as={React.Fragment}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="w-screen max-w-md">{children}</div>
          </Hui.Transition.Child>
        </div>
      </div>
    </Hui.Dialog>
  </Hui.Transition.Root>
);

export default SlideOver;
