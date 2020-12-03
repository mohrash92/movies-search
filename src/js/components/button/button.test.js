import React from 'react';
import Button from './button';
import { shallow } from 'enzyme';

describe('Button', () =>{
  test('renders a search button', () => {
    const searchWrapper = shallow(<Button />);
    expect(searchWrapper.find('button')).toHaveLength(1);
    expect(searchWrapper.find('button').text()).toBe('Search');
  });
});
