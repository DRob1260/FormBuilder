import React from 'react';
import {ComponentPicker} from './ComponentPicker';
import {shallow} from 'enzyme';

describe('ComponentPicker', () => {
   it('should render', () => {
       const wrapper = shallow(<ComponentPicker/>);
       expect(wrapper.find('#componentPickerSearch')).toExist();
   }) ;
});