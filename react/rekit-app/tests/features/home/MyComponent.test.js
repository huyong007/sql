import React from 'react';
import { shallow } from 'enzyme';
import { MyComponent } from '../../../src/features/home/MyComponent';

describe('home/MyComponent', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <MyComponent {...props} />
    );

    expect(
      renderedComponent.find('.home-my-component').length
    ).toBe(1);
  });
});
