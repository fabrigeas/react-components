import React from 'react';
import { ComponentType } from '../../types';
import './Button.scss';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    buttonType?: ComponentType;
    outlined?: boolean;
}
export declare const testId = "Button";
declare const Button: ({ type, className, buttonType, outlined, ...rest }: ButtonProps) => JSX.Element;
export default Button;
