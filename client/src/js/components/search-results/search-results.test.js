import React from 'react';
import SearchResults from './search-results.jsx';

import { mount, shallow } from 'enzyme';
describe('SearchResults', () => {
  const results = [
    {
      title: "Jack Reacher: Never Go Back",
      poster_path: "/wxLUQ1pIms3HAlVGYvEG9zg2kDs.jpg"
    },
    {
      title: "Jack Reacher",
      poster_path: "/zlyhKMi2aLk25nOHnNm43MpZMtQ.jpg"
    }
  ];

  test('renders correct results when they are passed', () => {
    const searchWrapper = mount(<SearchResults results={results}/>);

    expect(searchWrapper.find('.search-result').first().text()).toEqual('Jack Reacher: Never Go Back');
    expect(searchWrapper.find('.search-result').first().find("img").prop("src")).toEqual('https://image.tmdb.org/t/p/w500//wxLUQ1pIms3HAlVGYvEG9zg2kDs.jpg')
    expect(searchWrapper.find('.search-result').last().text()).toEqual('Jack Reacher');
    expect(searchWrapper.find('.search-result').last().find("img").prop("src")).toEqual('https://image.tmdb.org/t/p/w500//zlyhKMi2aLk25nOHnNm43MpZMtQ.jpg')
  });

  test('does not render search results if none are passed', () => {
    const searchWrapper = shallow(<SearchResults />);
    expect(searchWrapper.find('.search-results')).toHaveLength(0);
  });
});
