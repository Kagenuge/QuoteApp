import React from 'react';
import { shallow } from '../enzyme';
import Button from '../components/Button';

describe('Button tests', () => {

  it('renders button with the right attributons', () => {
    const wrapper = shallow(<Button buttonText="Enzyme test" />);

    expect(wrapper.contains(<button type="button" >Enzyme test</button>))
  });
});