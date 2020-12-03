import React from 'react';
import Details from './details.jsx';
import { shallow } from 'enzyme';

describe('Details', () =>{
  test('renders a details list', () => {
    const searchWrapper = shallow(<Details />);
    expect(searchWrapper.find('ul')).toHaveLength(1);
  });

  test('renders correct title', () => {
    const searchWrapper = shallow(<Details title={'test'}/>);
    expect(searchWrapper.find('h1').text()).toBe('test');
  });

  test('passes correct path to Link', () => {
    const searchWrapper = shallow(<Details path={'a-path'}/>);
    expect(searchWrapper.find('Link').props().to).toBe('a-path');
  });
});
