import classNames from "classnames";
import React, { FunctionComponent } from "react";

export interface SubmitFormProps {
    label: string;
    className?: string;
}

export const SubmitForm: FunctionComponent<SubmitFormProps> = ({ label, className = "border-t pt-5 border-gray-200" }) => {
    const classes = classNames("mt-8", className);

    return (
        <div className={classes}>
            <div className="flex justify-start">
                <span className="inline-flex rounded-md shadow-sm">
                    <button type="submit" className="btn-primary">
                        {label}
                    </button>
                </span>
            </div>
        </div>
    );
};

export default SubmitForm;
