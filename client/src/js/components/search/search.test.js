import React from 'react';
import Search from './search';
import { getSearchData } from './helpers';
import Button from "../button/button";
import { shallow } from 'enzyme';

jest.mock('./helpers', () => ({
  getSearchData: jest.fn()
}));

describe('Search', () => {
  test('renders a basic search form with input ', () => {
    const searchWrapper = shallow(<Search />);
    expect(searchWrapper.find('input')).toHaveLength(1);
  });

  test('renders a search button', () => {
    const searchWrapper = shallow(<Search />);
    expect(searchWrapper.find(Button)).toHaveLength(1);
  });

  test('calls getSearchData with correct parameters', () => {
    const searchWrapper = shallow(<Search />);
    searchWrapper.find('input').simulate('change', { target: { value: 'Tom Cruise'}});
    searchWrapper.simulate('submit', <form></form>);

    expect(getSearchData).toHaveBeenCalledWith(<form />, 'Tom Cruise', expect.any(Function));
  });
});
