import * as React from "react";
export interface CenterLayoutProps {
    title: string;
    subtitle?: string;
    top?: React.ReactNode;
    footer?: React.ReactNode;
    children?: React.ReactNode;
}
export declare const CenterLayout: React.FunctionComponent<CenterLayoutProps>;
export default CenterLayout;
