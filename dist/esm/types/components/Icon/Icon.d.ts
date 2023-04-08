import React from 'react';
import './Icon.scss';
import { ComponentType } from '../../types';
export type IconType = 'trash' | 'sort' | 'list' | 'home' | 'next' | 'edit';
export interface IconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    iconType?: ComponentType;
    icon: IconType;
}
declare const Icon: ({ iconType, icon, ...rest }: IconProps) => JSX.Element;
export default Icon;
