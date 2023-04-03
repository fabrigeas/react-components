import { faker } from '@faker-js/faker';
import { ComponentType, Message } from './types';

export interface FakeToastNotificationProps {
  type?: ComponentType;
  title?: string;
  content?: string;
}
export const fakeMessage = (props?: FakeToastNotificationProps): Message => ({
  id: `${new Date()}`,
  title: props?.title ?? faker.commerce.productName(),
  content: props?.content ?? faker.commerce.productDescription(),
  type:
    props?.type ??
    faker.helpers.arrayElement([
      'error',
      'info',
      'success',
      'warning',
    ] as ComponentType[]),
  time: '5 mins',
});

export const fakeToastNotificationList = (
  count: number,
  props?: FakeToastNotificationProps,
): Message[] => [...Array(count)].map(() => fakeMessage(props));
