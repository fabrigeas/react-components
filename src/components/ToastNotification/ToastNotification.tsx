import React from 'react';
import './ToastNotification.scss';
import { Message } from '../../types';

export const testId = 'toast-notification';
export interface ToastNotiticationProps {
  message: Message;
  destroy: { (message: Message): void };
}

const ToastNotification = ({ message, destroy }: ToastNotiticationProps): JSX.Element => {
  const { type, time, title, content, id } = message;
  const notificationType = type ?? 'info';
  const className = `toast-notification ${notificationType}`;

  setTimeout(() => destroy(message), 5000);

  return (
    <div
      id={id}
      className={className}
      role="alert"
      aria-live="assertive"
      aria-atomic={true}
      data-testid={testId}
      style={{
        maxWidth: '50vw',
        right: 0,
      }}
    >
      <div className="header">
        <strong className="title">{title}</strong>
        {time && <small className="time">{time}</small>}
        <button
          type="button"
          className="close"
          data-dismiss="toast"
          aria-label="Close"
          onClick={() => destroy(message)}
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
      {content && <div className="content">{content}</div>}
      <div className="footer">
        <div className="progressBar"></div>
      </div>
    </div>
  );
};

export default ToastNotification;
