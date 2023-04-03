import React from 'react';
import './Input.scss';
export declare const testId = "Input";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, React.TextareaHTMLAttributes<HTMLInputElement> {
    isValid?: boolean;
    invalidFeedback?: string;
    validFeedback?: string;
    label?: string;
    textarea?: boolean;
}
declare const Input: ({ validFeedback, invalidFeedback, isValid, label, textarea, className, ...props }: InputProps) => JSX.Element;
export default Input;
