import React, { FunctionComponent, ReactNode } from "react";
export interface ToolbarButtonProps {
    index?: number;
    first?: boolean;
    last?: boolean;
    active?: boolean;
    label: string;
    title?: string;
    icon: (props: React.ComponentProps<"svg">) => JSX.Element;
}
export interface ToolbarButtonDispatch {
    onTabClick?: (item: number) => void;
}
export interface ToolbarDividerProps {
    menu: Array<ToolbarButtonProps>;
    toolBarClasses?: string;
    children: ReactNode;
}
export declare const ToolbarButton: FunctionComponent<ToolbarButtonProps & ToolbarButtonDispatch>;
export declare const ToolbarDivider: FunctionComponent<ToolbarDividerProps>;
