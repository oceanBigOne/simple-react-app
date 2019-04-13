import React from 'react';
import CheckboxSwitch from "./CheckboxSwitch";
import renderer from 'react-test-renderer';


test('checkboxSwicth change on click', () => {
    const component = renderer.create(
        <CheckboxSwitch />,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component.getInstance().focus();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

   // console.log(tree.children[0].props);
    // manually trigger the callback
   // tree.children[0].props.onFocus();
    // re-rendering
    //tree = component.toJSON();
    //expect(tree).toMatchSnapshot();
});

test('adds 1 + 2 to equal 3', () => {
    const component = renderer.create(
        <CheckboxSwitch />,
    );

    expect(component.getInstance().sum(1, 2)).toBe(3);
});