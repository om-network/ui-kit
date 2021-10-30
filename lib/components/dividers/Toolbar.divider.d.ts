import * as React from "react";
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
    children: React.ReactNode;
}
export declare const ToolbarButton: React.FunctionComponent<ToolbarButtonProps & ToolbarButtonDispatch>;
export declare const ToolbarDivider: React.FunctionComponent<ToolbarDividerProps>;
