import React from 'react';
import {ComponentPicker} from './ComponentPicker';
import {shallow} from 'enzyme';

describe('ComponentPicker', () => {
   it('should render', () => {
       const wrapper = shallow(<ComponentPicker/>);
       expect(wrapper).toIncludeText('Form Objects');
   }) ;

   const components = [
       {
           label: 'My Component',
           name:'myComponent'
       }
   ]


   it('uses components prop', () => {
       const wrapper = shallow(<ComponentPicker components={components} />);
       expect(wrapper).toContainMatchingElement('ComponentPickerRow');
   })
});