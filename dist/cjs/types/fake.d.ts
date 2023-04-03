import { ComponentType, Message } from './types';
export interface FakeToastNotificationProps {
    type?: ComponentType;
    title?: string;
    content?: string;
}
export declare const fakeMessage: (props?: FakeToastNotificationProps) => Message;
export declare const fakeToastNotificationList: (count: number, props?: FakeToastNotificationProps) => Message[];
