import React from 'react';
import { ComponentType } from '../../types';
import './Button.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ComponentType;
  outlined?: boolean;
}

export const testId = 'Button';

const Button = ({
  className,
  buttonType = 'info',
  outlined,
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <button
      data-testid={testId}
      className={`Button ${buttonType} ${outlined ? 'outlined' : ''} ${className ?? ''}`}
      {...rest}
    ></button>
  );
};

export default Button;
