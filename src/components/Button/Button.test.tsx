import React from 'react';
import { screen } from '@testing-library/react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Button, {testId} from './Button';
import { ComponentType } from '../../types';

let container: HTMLDivElement;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container.remove();
});

it('renders', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<Button buttonType={'info'}>He</Button>);
  });

  expect(screen.getByTestId(testId)).toBeInTheDocument();
});

test('default buttonType', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<Button />);
  });

  expect(screen.getByTestId(testId)).toHaveClass('info');
});

describe.each(['info', 'error', 'success', 'warning'])('with value: %s:', buttonType => {
  test('renderes buttonType', async () => {
    act(() => {
      ReactDOM.createRoot(container).render(
        <Button buttonType={buttonType as ComponentType} />,
      );
    });

    expect(screen.getByTestId(testId)).toHaveClass(buttonType);
  });

  test('classList contains className', async () => {
    act(() => {
      ReactDOM.createRoot(container).render(<Button className={buttonType} />);
    });

    expect(screen.getByTestId(testId)).toHaveClass(buttonType);
  });

  test('renders children', async () => {
    act(() => {
      ReactDOM.createRoot(container).render(<Button> {buttonType}</Button>);
    });

    expect(screen.getByTestId(testId).textContent).toContain(buttonType);
  });
});

describe.each(['button', 'reset', 'submit'])('props.type: %s', type => {
  test(`renders ${type}`, async () => {
    act(() => {
      // @ts-expect-error Type 'string' is not assignable to type '"submit" | "reset" | "button" | undefined'.ts(2322)
      ReactDOM.createRoot(container).render(<Button type={type} />);
    });

    expect((screen.getByTestId(testId) as HTMLButtonElement).type).toEqual(type);
  });
});
