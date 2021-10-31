import { IntentType } from "../enums/intentType.enum";
import { NotificationType } from "../enums/notificationType.enum";
export interface Notification {
    type?: NotificationType;
    intent?: IntentType;
    id: string;
    model: any;
}
export interface NotificationProps extends Notification {
    closeLabel?: string;
    timer?: number;
    onClose: (id: string) => void;
}
