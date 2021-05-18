import { ReactNode } from "react";
interface SlideOverProps {
    onClose: () => void;
    children: ReactNode;
}
interface SlideOverFooterProps {
    children: ReactNode;
    className?: string;
}
interface SlideOverHeaderProps {
    title: string;
    description?: string;
    children?: ReactNode;
}
export declare const SlideOverHeader: ({ title, description, children }: SlideOverHeaderProps) => JSX.Element;
export declare const SlideOverFooter: ({ children, className }: SlideOverFooterProps) => JSX.Element;
declare const SlideOver: ({ children, onClose }: SlideOverProps) => JSX.Element;
export default SlideOver;
