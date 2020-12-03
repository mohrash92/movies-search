import React from 'react';
import SearchResult from './search-result.jsx';

import { shallow } from 'enzyme';
describe('SearchResult', () => {

  test('renders the result with a title and image', () => {
    const searchWrapper = shallow(<SearchResult title='Terminator' posterPath='some-path.co.uk' />);

    expect(searchWrapper.find('.search-result').text()).toEqual('Terminator');
    expect(searchWrapper.find('.search-result').find("img").prop("src")).toEqual('https://image.tmdb.org/t/p/w500/some-path.co.uk');
  });
});
