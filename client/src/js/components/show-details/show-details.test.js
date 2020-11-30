import React from 'react';
import ShowDetails from "./show-details";
import { shallow } from 'enzyme';

describe('ShowDetails', () => {
  test('renders ShowDetails component ', () => {
    const showDetailsWrapper  = shallow(
      <ShowDetails match={ {params: { id: '123' }}} />
    );
    expect(showDetailsWrapper.find('.show-details')).toHaveLength(1);
  });
});
