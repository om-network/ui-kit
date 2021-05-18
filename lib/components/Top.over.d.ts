import { ReactNode } from "react";
interface TopOverProps {
    children: ReactNode;
    width?: "max-w-sm" | "max-w-md" | "max-w-full";
}
interface TopOverHeaderProps {
    title?: string;
    description?: string;
}
export declare const TopOverHeader: ({ title, description }: TopOverHeaderProps) => JSX.Element;
export declare const TopOver: ({ children, width }: TopOverProps) => JSX.Element;
export default TopOver;
