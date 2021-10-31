/// <reference types="react" />
import { NotificationProps } from "../../interfaces/notification.interface";
export interface SimpleNotificationModel {
    title: string;
    description?: string;
}
export declare const SimpleNotification: ({ id, model, intent, closeLabel, onClose, timer: _timer }: NotificationProps) => JSX.Element;
export default SimpleNotification;
