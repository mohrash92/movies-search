import React from 'react';
import Search from './search';
import Button from "../button/button";
import { shallow, mount } from 'enzyme';

describe('Search', () => {
  test('renders a basic search form with input ', () => {
    const searchWrapper = shallow(<Search />);
    expect(searchWrapper.find('input')).toHaveLength(1);
  });

  test('renders a search button', () => {
    const searchWrapper = shallow(<Search />);
    expect(searchWrapper.find(Button)).toHaveLength(1);
  });
});
