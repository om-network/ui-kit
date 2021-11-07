import classNames from "classnames";
import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    initialFocus?: boolean;
    active?: boolean;
    danger?: boolean;
    className?: string;
    children?: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
    const { label, active, danger, children, className = "", ...buttonProps } = props;

    const btnClasses = classNames(className, {
        active,
        danger,
        btn: !active && !danger
    });

    return (
        // eslint-disable-next-line react/button-has-type
        <button {...buttonProps} className={btnClasses}>
            {children}
            {label}
        </button>
    );
};

export default Button;
