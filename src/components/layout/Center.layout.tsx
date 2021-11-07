import React, { FunctionComponent, ReactNode } from "react";

import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/navbar/Navbar";

export interface CenterLayoutProps {
    title: string;
    subtitle?: string;
    left?: ReactNode;
    children?: any;
}

export const CenterLayout: FunctionComponent<CenterLayoutProps> = ({ title, subtitle, left, children }) => {
    return (
        <div>
            <div className="fixed top-0 left-0 w-1/2 h-full bg-gray-50" />
            <div className="fixed top-0 right-0 w-1/2 h-full bg-gray-50" />
            <div className="relative min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-grow w-full max-w-3xl mx-auto xl:px-8 lg:flex">
                    <div className="flex-1 min-w-0 bg-gray-50 xl:flex">
                        <div className="bg-gray-50 lg:min-w-0 lg:flex lg:flex-grow lg:flex-col lg:justify-between">
                            <div className="pl-4 pr-6 pt-4 pb-4 bg-white border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
                                <div className="flex items-left flex-col mb-6">
                                    <h1 className="flex-1 text-xl leading-7 font-medium">{title}</h1>
                                    {subtitle && <p className="mt-2 text-sm text-gray-500">{subtitle}</p>}
                                </div>
                                {children}
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CenterLayout;
