import { IntentType } from "../enums/intentType.enum";
export declare enum NotificationType {
    simple = "simple",
    condensed = "condensed",
    action = "action",
    avatar = "avatar",
    split = "split",
    below = "below"
}
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
