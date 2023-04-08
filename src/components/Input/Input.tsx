import React from 'react';
import './Input.scss';

export const testId = 'Input';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    React.TextareaHTMLAttributes<HTMLInputElement> {
  isValid?: boolean;
  invalidFeedback?: string;
  validFeedback?: string;
  label?: string;
  textarea?: boolean;
}

const Input = ({
  validFeedback,
  invalidFeedback,
  isValid,
  label,
  textarea,
  className,
  ...props
}: InputProps) => {
  const id = Math.random().toString(16).slice(2);
  const validate = isValid !== undefined;
  const validClass = isValid ? 'is-valid' : 'is-invalid';
  const classList = `form-control ${className ?? ''} ${validate && validClass}`;

  return (
    <div data-testid={testId} className={`Input ${validClass} ${props.type ?? 'text'}`}>
      {label && (
        <label className="form-label" htmlFor={id}>
          {label}
        </label>
      )}
      {textarea ? (
        <textarea
          id={id}
          className={classList}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          style={{ height: 'unset !important' }}
        ></textarea>
      ) : (
        <input id={id} className={classList} {...props} />
      )}
      <div data-testid="feedback" className={`feedback ${isValid ? 'valid' : 'invalid'}-feedback`}>
        {isValid ? validFeedback : invalidFeedback}
      </div>
    </div>
  );
};

export default Input;
