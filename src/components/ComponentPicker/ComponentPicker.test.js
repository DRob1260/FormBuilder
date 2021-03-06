import React from 'react';
import {ComponentPicker} from './ComponentPicker';
import {shallow} from 'enzyme';

describe('ComponentPicker', () => {
   it('should render', () => {
       const wrapper = shallow(<ComponentPicker/>);
   });

   const components = {
       'myComponent': {
           label: 'My Component',
       }
   }


   it('uses components prop', () => {
       const wrapper = shallow(<ComponentPicker components={components} />);
       expect(wrapper).toContainMatchingElement('ComponentPickerRow');
   })
});