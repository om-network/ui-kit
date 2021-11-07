import * as React from "react";
export interface SceneLayoutProps {
    title: string;
    menu?: React.ReactNode;
    top: React.ReactNode;
    left: React.ReactNode;
    right: React.ReactNode;
    footer: React.ReactNode;
    children?: React.ReactNode;
}
export declare const SceneLayout: React.FunctionComponent<SceneLayoutProps>;
export default SceneLayout;
