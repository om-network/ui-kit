/* This example requires Tailwind CSS v2.0+ */
import * as React from "react";

export interface NotificationsProps {
    children: React.ReactNode;
}

export const Notifications = ({ children }: NotificationsProps) => {
    const wrapperClasses = "fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-20";
    const itemsClasses = "w-full flex flex-col items-center space-y-4 sm:items-end";

    return (
        <div aria-live="assertive" className={wrapperClasses}>
            <div className={itemsClasses}>{children}</div>
        </div>
    );
};

export default Notifications;
