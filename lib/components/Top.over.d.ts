import * as React from "react";
export interface TopOverProps {
    children: React.ReactNode;
    width?: "max-w-sm" | "max-w-md" | "max-w-full";
}
export interface TopOverHeaderProps {
    title?: string;
    description?: string;
}
export declare const TopOverHeader: ({ title, description }: TopOverHeaderProps) => JSX.Element;
export declare const TopOver: ({ children, width }: TopOverProps) => JSX.Element;
export default TopOver;
