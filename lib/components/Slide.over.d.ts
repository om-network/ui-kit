import { ReactNode } from "react";
export interface SlideOverProps {
    onClose: () => void;
    children: ReactNode;
}
export interface SlideOverFooterProps {
    children: ReactNode;
    className?: string;
}
export interface SlideOverHeaderProps {
    title: string;
    description?: string;
    children?: ReactNode;
}
export declare const SlideOverHeader: ({ title, description, children }: SlideOverHeaderProps) => JSX.Element;
export declare const SlideOverFooter: ({ children, className }: SlideOverFooterProps) => JSX.Element;
export declare const SlideOver: ({ children, onClose }: SlideOverProps) => JSX.Element;
export default SlideOver;
