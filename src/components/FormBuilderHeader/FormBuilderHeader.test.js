import React from 'react';
import {shallow} from 'enzyme';
import {FormBuilderHeader} from './FormBuilderHeader';

describe('FormBuilderHeader', () => {
   it('should render', () => {
      const wrapper = shallow(<FormBuilderHeader/>);
       expect(wrapper).toContainMatchingElement('Navbar');
   });
});