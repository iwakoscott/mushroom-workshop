import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { Form } from '..';
import 'jest-dom/extend-expect';

afterEach(cleanup);

describe(`<Form />`, () => {
  const fakeEmail = 'host@foodnome.com';

  it(`renders without crashing...`, () => {
    const { container } = render(<Form />);
    expect(container).toMatchSnapshot();
  });

  it(`submits a users email`, () => {
    const fakeSubmitHandler = jest.fn();
    const { getByLabelText, getByText } = render(
      <Form onSubmitEmail={fakeSubmitHandler} />
    );

    // DOM Nodes
    const inputNode = getByLabelText(/email/i);
    const submitButtonNode = getByText(/submit/i);

    expect(submitButtonNode).toBeDisabled();

    // change input field
    fireEvent.change(inputNode, { target: { value: fakeEmail } });
    expect(inputNode.value).toBe(fakeEmail);

    // fire submit
    fireEvent.click(submitButtonNode.parentNode);
    expect(fakeSubmitHandler).toHaveBeenCalledTimes(1);
    expect(fakeSubmitHandler).toHaveBeenCalledWith(fakeEmail);
  });
});
