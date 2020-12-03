import React from 'react';
import PersonDetails from "./person-details.jsx";
import { shallow } from 'enzyme';

describe('PersonDetails', () => {
  test('renders PersonDetails component ', () => {
    const personDetailsWrapper  = shallow(
      <PersonDetails match={ {params: { id: '123' }}} />
    );
    expect(personDetailsWrapper.find('.person-details')).toHaveLength(1);
  });
});
