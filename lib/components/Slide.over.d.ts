import * as React from "react";
import { PositionType } from "../enums/positionType.enum";
export interface SlideOverProps {
    onClose: () => void;
    position?: PositionType.leftmid | PositionType.rightmid;
    children: React.ReactNode;
}
export interface SlideOverFooterProps {
    children: React.ReactNode;
    className?: string;
}
export interface SlideOverHeaderProps {
    title: string;
    description?: string;
    children?: React.ReactNode;
}
export declare const SlideOverHeader: ({ title, description, children }: SlideOverHeaderProps) => JSX.Element;
export declare const SlideOverFooter: ({ children, className }: SlideOverFooterProps) => JSX.Element;
export declare const SlideOver: ({ children, onClose, position }: SlideOverProps) => JSX.Element;
export default SlideOver;
