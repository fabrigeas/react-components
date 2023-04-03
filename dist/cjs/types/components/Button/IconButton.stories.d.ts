/// <reference types="react" />
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';
declare const _default: ComponentMeta<({ className, buttonType, outlined, ...rest }: import("./Button").ButtonProps) => JSX.Element>;
export default _default;
export declare const ListButton: ComponentStory<typeof Button>;
export declare const SortButton: ComponentStory<typeof Button>;
export declare const DeleteButton: ComponentStory<typeof Button>;
