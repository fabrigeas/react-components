import React from 'react';
import './Icon.scss';
import { ComponentType } from '../../types';

export type IconType = 'trash' | 'sort' | 'list' | 'home' | 'next';
export interface IconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconType?: ComponentType;
  icon: IconType;
}

const Icon = ({ iconType, icon, ...rest }: IconProps) => {
  const iconDict: Record<IconType, JSX.Element> = {
    list: <span>&#9776;</span>,
    sort: <span>&#8645;</span>,
    trash: <span>&#x1F5D1;</span>,
    home: <span>&#127968;</span>,
    next: <span>&#62;</span>,
  };

  return (
    <span className={`Icon ${iconType}`} {...rest}>
      {iconDict[icon]}
    </span>
  );
};

export default Icon;
