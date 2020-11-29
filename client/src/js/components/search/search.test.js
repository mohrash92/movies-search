import React from 'react';
import Search from './search';
import * as helpers from './helpers';
import Button from "../button/button";
import { shallow } from 'enzyme';

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
    searchWrapper.find(Button).simulate('click');
    helpers.getSearchData = jest.fn();
    expect(helpers.getSearchData).toHaveBeenCalledWith("param1","param2");
    console.log("helpers.getSearchData.mock.calls[0]", helpers.getSearchData.mock.calls[0]);
    // expect(helpers.getSearchData.mock.calls[0]).toEqual('Tom Cruise')
  });
});
