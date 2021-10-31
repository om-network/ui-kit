import * as React from "react";
export interface CollapseProps {
    title?: string;
    sections: Array<{
        key: string;
        header: string;
        body: React.ReactNode;
    }>;
}
export declare const Collapse: ({ sections, title }: CollapseProps) => JSX.Element;
export default Collapse;
