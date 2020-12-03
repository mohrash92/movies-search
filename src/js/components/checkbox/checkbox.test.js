import React from 'react';
import CheckBox from './checkbox.jsx';
import { shallow } from 'enzyme';

describe('CheckBox', () =>{
  test('renders a Checkbox', () => {
    const searchWrapper = shallow(<CheckBox />);
    expect(searchWrapper.find('input')).toHaveLength(1);
    expect(searchWrapper.find('.checkbox')).toHaveLength(1);
  });

  test('sets correct mediaType on a Checkbox', () => {
    const searchWrapper = shallow(<CheckBox mediaType={'test'}/>);
    expect(searchWrapper.find('input').prop('name')).toBe('test');
  });

  test('sets correct checked status on a Checkbox', () => {
    const searchWrapper = shallow(<CheckBox isChecked={true} />);
    expect(searchWrapper.find('input').prop('checked')).toBe(true);
  });
});
