import React from 'react';
import { screen } from '@testing-library/react';
import Input, { testId } from './Input';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';

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
    ReactDOM.createRoot(container).render(<Input />);
  });

  const assertion = expect(screen.getByTestId(testId));

  assertion.toBeInTheDocument();
  assertion.toHaveClass(testId);
});

it('renders textarea', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<Input textarea/>);
  });


  expect(screen.getByTestId(testId).querySelector('textarea')).toBeTruthy()
});

test.each([
  ['lorem', true],
  ['ipsum', true],
])('renders label (%i, %i)', (label, expected) => {
  act(() => {
    ReactDOM.createRoot(container).render(<Input label={label} />);
  });

  if(label) {
    expect(screen.getByTestId(testId)).toHaveTextContent(label);
  }
});


describe.each([true, false])('has class is-valid', isValid => {
  test(`isValid: ${isValid}`, () => {
    act(() => {
      ReactDOM.createRoot(container).render(<Input isValid={isValid} />);
    });

    expect(screen.getByTestId(testId)).toHaveClass(
      `${isValid ? 'is-valid' : 'is-invalid'}`
    );
  });
});
