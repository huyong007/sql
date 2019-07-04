import React from 'react';
import { shallow } from 'enzyme';
import { CouterPage } from '../../../src/features/demo/CouterPage';

describe('demo/CouterPage', () => {
  it('renders node with correct class name', () => {
    const props = {
      demo: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <CouterPage {...props} />
    );

    expect(
      renderedComponent.find('.demo-couter-page').length
    ).toBe(1);
  });
});
