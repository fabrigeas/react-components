/// <reference types="react" />
import './ToastNotification.scss';
import { Message } from '../../types';
export declare const testId = "toast-notification";
export interface ToastNotiticationProps {
    message: Message;
    destroy: {
        (message: Message): void;
    };
}
declare const ToastNotification: ({ message, destroy }: ToastNotiticationProps) => JSX.Element;
export default ToastNotification;
