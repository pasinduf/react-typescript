import React from 'react';
import Sample from '../app/components/test/sample2'
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render } from '@testing-library/react'


//DOM testing
afterEach(cleanup);
it('CheckboxWithLabel changes the text after click', () => {
    const { queryByLabelText, getByLabelText } = render(
        <Sample labelOn="On" labelOff="Off" />,
    );

    expect(queryByLabelText(/on/i)).toBeTruthy();
    fireEvent.click(getByLabelText(/on/i));
    expect(queryByLabelText(/off/i)).toBeTruthy();
});


