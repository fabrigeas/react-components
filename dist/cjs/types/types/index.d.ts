export type ComponentType = 'info' | 'success' | 'error' | 'warning';
export interface ToastContent {
    content: string;
    title?: string;
    time?: string;
    type?: ComponentType;
    durationMs?: number;
}
export interface Message extends ToastContent {
    id: string;
}
