import * as Hui from "@headlessui/react";
import * as Hi from "@heroicons/react/outline";
import classNames from "classnames";
import * as React from "react";

export interface CollapseProps {
    title?: string;
    sections: Array<{ key: string; header: string; body: React.ReactNode }>;
}

export const Collapse = ({ sections, title }: CollapseProps) => (
    <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto divide-y-2 ">
            {title && <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">{title}</h2>}
            <dl>
                {sections.map((section) => (
                    <Hui.Disclosure as="div" key={section.key} className="pt-4 w-full">
                        {({ open }) => (
                            <>
                                <dt className="text-lg">
                                    <Hui.Disclosure.Button className="text-left w-full flex p-2 justify-between items-start bg-green-600 text-white">
                                        <span className="font-medium text-white">{section.header}</span>
                                        <span className="ml-6 h-7 flex items-center">
                                            <Hi.ChevronDownIcon
                                                className={classNames(open ? "-rotate-180" : "rotate-0", "h-6 w-6 transform")}
                                                aria-hidden="true"
                                            />
                                        </span>
                                    </Hui.Disclosure.Button>
                                </dt>
                                <Hui.Disclosure.Panel as="dd" className="bg-gray-100">
                                    <div className="text-base text-gray-500 p-2">{section.body}</div>
                                </Hui.Disclosure.Panel>
                            </>
                        )}
                    </Hui.Disclosure>
                ))}
            </dl>
        </div>
    </div>
);

export default Collapse;
