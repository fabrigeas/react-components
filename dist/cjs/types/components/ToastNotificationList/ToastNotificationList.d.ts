/// <reference types="react" />
import './ToastNotificationList.scss';
import { Message } from '../../types';
export interface ToastNotificationListProps {
    notifications: Message[];
    destroy: {
        (message: Message): void;
    };
}
export declare const testId = "toast-notification-list";
declare const ToastNotificationList: ({ destroy, notifications, }: ToastNotificationListProps) => JSX.Element;
export default ToastNotificationList;
