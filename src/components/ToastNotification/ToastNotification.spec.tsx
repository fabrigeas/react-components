import React from 'react';
import { act, screen } from '@testing-library/react';
import ReactDOM from 'react-dom/client';
import ToastNotification, { testId } from './ToastNotification';
import { fakeMessage } from '../../fake';

let root: HTMLDivElement;

beforeEach(() => {
  root = document.createElement('div');
  document.body.appendChild(root);
});

afterEach(() => {
  document.body.removeChild(root);

  root.remove();
});

const content = 'lorem ipsum';
const title = 'lorem';
const destroy = () => {};

test('default type', () => {
  act(() => {
    ReactDOM.createRoot(root).render(
      <ToastNotification destroy={destroy} message={fakeMessage({ title })} />,
    );
  });

  const dom = screen.getByTestId(testId);

  expect(dom.querySelector('.title')?.textContent).toEqual(title);
  expect(dom.querySelector('.content')?.textContent).toEqual(content);
});

describe.each(['lorem', 'ipsum', 'dolor'])('renders properties', title => {
  const content = `description ${title}`;
  test(`title:${title} content:${content}`, () => {
    act(() => {
      ReactDOM.createRoot(root).render(
        <ToastNotification
          destroy={destroy}
          message={fakeMessage({ title, content })}
        />,
      );
    });

    const dom = screen.getByTestId(testId);

    expect(dom.querySelector('.title')?.textContent).toEqual(title);
    expect(dom.querySelector('.content')?.textContent).toEqual(content);
  });
});
