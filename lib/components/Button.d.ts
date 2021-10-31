import * as React from "react";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    initialFocus?: boolean;
    active?: boolean;
    danger?: boolean;
    className?: string;
    children?: React.ReactNode;
}
export declare const Button: (props: ButtonProps) => JSX.Element;
export default Button;
