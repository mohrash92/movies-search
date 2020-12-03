import React from 'react';
import MovieDetails from "./movie-details";
import { shallow } from 'enzyme';

describe('MovieDetails', () => {
  test('renders MovieDetails component ', () => {
    const movieDetailsWrapper  = shallow(
      <MovieDetails match={ {params: { id: '123' }}} />
    );
    expect(movieDetailsWrapper.find('.movie-details')).toHaveLength(1);
  });
});
