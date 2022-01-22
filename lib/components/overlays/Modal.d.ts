import * as React from "react";
export interface ModalProps {
    closeLabel?: string;
    title?: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
    onClose: () => void;
}
export interface ModalPanelProps {
    onClose: () => void;
    closeLabel?: string;
    title?: string;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}
export interface ModalFooterProps {
    children: React.ReactNode;
    wrapperClasses?: string;
}
export declare const ModalPanel: React.FC<ModalPanelProps>;
export declare const ModalFooter: React.FC<ModalFooterProps>;
export declare const Modal: React.FC<ModalProps>;
export default Modal;
