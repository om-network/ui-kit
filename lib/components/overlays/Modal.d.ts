import * as React from "react";
export interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
    width?: "max-w-sm" | "max-w-md" | "max-w-full";
}
export interface ModalHeaderProps {
}
export interface ModalFooterProps {
}
export declare const Modal: React.FC<ModalProps>;
export default Modal;
