import React from 'react';
import { fireEvent, render, screen, act } from '@testing-library/react';
import LarryComp from "./LarryComp";

test('test the LarryComp', async () => {
    // console.log('Does this work');

    const myCountFunc = jest.fn();
    render(<LarryComp countFunc={myCountFunc}></LarryComp>);
    // screen.debug();

    click(/larrycomp/i);
    click(/larrycomp/i);
    click(/larrycomp/i);
    
    console.log(myCountFunc.mock.calls.length);
    // click('LarryComp');
});

function click(txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
}