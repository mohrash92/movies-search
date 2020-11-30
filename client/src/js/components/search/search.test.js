import React from 'react';
import Search from './search';
import Button from "../button/button";
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Search', () => {
  test('renders a basic search form with input ', () => {
    const getSearchData = jest.fn();
    const setResults = jest.fn();
    const searchWrapper = mount(
      <Router>
        <Search getSearchData={getSearchData} setResults={setResults} />
      </Router>
    );

    expect(searchWrapper.find('input')).toHaveLength(1);
  });

  test('renders a search button', () => {
    const getSearchData = jest.fn();
    const setResults = jest.fn();
    const searchWrapper = mount(
      <Router>
        <Search getSearchData={getSearchData} setResults={setResults} />
      </Router>
    );
    expect(searchWrapper.find(Button)).toHaveLength(1);
  });
});
