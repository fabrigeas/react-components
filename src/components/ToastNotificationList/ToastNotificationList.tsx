import React from 'react';
import './ToastNotificationList.scss';
import ToastNotification from '../ToastNotification/ToastNotification';
import { Message } from '../../types';

export interface ToastNotificationListProps {
  notifications: Message[];
  destroy: { (message: Message): void };
}

export const testId = 'toast-notification-list';

const ToastNotificationList = ({
  destroy,
  notifications,
}: ToastNotificationListProps): JSX.Element => {
  return (
    <div
      className="toast-notification-list"
      data-testid={testId}
      style={{
        position: 'fixed',
        right: 0,
        top: 0,
        maxWidth: '50%',
        fontSize: '0.875rem',
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        backgroundClip: 'padding-box',
        boxShadow: '0 0.25rem 0.75rem rgba(0, 0, 0, 0.1)',
        WebkitBackdropFilter: 'blur(10px)',
        backdropFilter: 'blur(10px)',
        borderRadius: '0.25rem',
        color: 'white',
        zIndex: 2,
      }}
    >
      <div className="notification-list">
        {notifications.map((message, i) => (
          <ToastNotification key={i} message={message} destroy={destroy} />
        ))}
      </div>
    </div>
  );
};

export default ToastNotificationList;
