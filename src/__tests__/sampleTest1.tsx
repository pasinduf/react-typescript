import React from 'react';
import Sample from '../app/components/test/sample1'
import renderer from 'react-test-renderer';
import { cleanup, render, fireEvent, getByTitle } from '@testing-library/react';

test('sample renders correctly', () => {
    const tree = renderer.create(<Sample page={'https://www.youtube.com/'}>youtube</Sample>).toJSON();
    expect(tree).toMatchSnapshot();
});

// afterEach(cleanup);
// it('changes text in mouse hover', () => {
//     const { queryByLabelText, getByLabelText, getByText, getByTitle } = render(
//         <Sample page={'https://www.youtube.com/'}>youtube</Sample>,
//     );


// expect(queryByLabelText(/normal/i)).toBeTruthy();
// fireEvent.mouseEnter(getByLabelText(/normal/i));
// expect(queryByLabelText(/hovered/i)).toBeTruthy();

// fireEvent.mouseLeave(getByLabelText(/hovered/i));
// expect(queryByLabelText(/normal/i));

// const labelText = getByText(/normal/i);
// console.log(labelText);

// const title = getByText('title1')
// console.log(title);





//})





