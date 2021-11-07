import * as React from "react";
export interface SideBarLayoutProps {
    title: string;
    subtitle?: string;
    top?: React.ReactNode;
    left?: React.ReactNode;
    footer?: React.ReactNode;
    children?: React.ReactNode;
}
export declare const SideBarLayout: React.FunctionComponent<SideBarLayoutProps>;
export default SideBarLayout;
