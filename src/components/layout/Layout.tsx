import React, { FunctionComponent, ReactNode } from "react";
import { useLocation } from "react-router-dom";

import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/navbar/Navbar";

export interface SceneLayoutProps {
    title: string;
    menu?: ReactNode;
    left: ReactNode;
    right: ReactNode;
    children?: any;
}

export const SceneLayout: FunctionComponent<SceneLayoutProps> = ({ title, menu, left, right, children }) => {
    const location = useLocation();
    const thingType = location.pathname.split("/")[1];

    return (
        <div>
            <div className="fixed top-0 left-0 w-1/2 h-full bg-white" />
            <div className="fixed top-0 right-0 w-1/2 h-full bg-gray-50" />
            <div className="relative min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
                    <div className="flex-1 min-w-0 bg-white xl:flex">
                        {left}
                        <div className="bg-gray-50 lg:min-w-0 lg:flex lg:flex-grow lg:flex-col lg:justify-start">
                            <div>
                                <div className="pl-4 pr-6 pt-4 pb-4 bg-white border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
                                    <div className="flex items-center">
                                        <h1 className="flex-1 text-lg leading-7 font-medium">{title}</h1>
                                        {thingType === "things" && menu}
                                    </div>
                                </div>
                                {children}
                            </div>
                            <Footer />
                        </div>
                    </div>
                    {right}
                </div>
            </div>
        </div>
    );
};

export default SceneLayout;
