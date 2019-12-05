import React from 'react';
import { shallow } from '../enzyme';
import Form from '../components/Form';

describe('Form tests', () => {

  it('renders form', () => {
    const wrapper = shallow(<Form />);

    expect(wrapper.contains(<input></input>))
  });
});