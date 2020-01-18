import React from 'react';
import {shallow} from 'enzyme';
import {FormBuilderFooter} from './FormBuilderFooter';

describe('FormBuilderFooter', () => {
   it('should render', () => {
       const wrapper = shallow(<FormBuilderFooter/>);
       expect(wrapper).toContainMatchingElement('Navbar');
   }) ;
});