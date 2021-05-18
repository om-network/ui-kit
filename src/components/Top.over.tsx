import { Transition } from "@headlessui/react";
import classNames from "classnames";
import React, { Fragment, ReactNode } from "react";

interface TopOverProps {
  children: ReactNode;
  width?: "max-w-sm" | "max-w-md" | "max-w-full";
}

interface TopOverHeaderProps {
  title?: string;
  description?: string;
}

export const TopOverHeader = ({ title, description }: TopOverHeaderProps) => (
  <div className="py-3 mb-0 px-4 bg-white">
    {title && <h2 className="text-lg font-medium border-b-2 mb-2 pb-1 text-center text-gray-700">{title}</h2>}
    {description && (
      <div className="mt-1 py-1">
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    )}
  </div>
);

export const TopOver = ({ children, width = "max-w-md" }: TopOverProps) => (
  <Transition.Root show as={Fragment}>
    <div className="absolute inset-0 overflow-hidden bg-gray-50 bg-opacity-80">
      <div className="sticky inset-y-0 max-w-full top-0 flex flex-col items-center">
        <Transition.Child
          as={Fragment}
          enter="transform transition ease-in-out duration-500 sm:duration-700"
          enterFrom="-translate-y-full"
          enterTo="translate-y-0"
          leave="transform transition ease-in-out duration-500 sm:duration-700"
          leaveFrom="-translate-y-full"
          leaveTo="translate-y-0"
        >
          <div className={classNames("w-screen", width)}>{children}</div>
        </Transition.Child>
      </div>
    </div>
  </Transition.Root>
);

export default TopOver;
