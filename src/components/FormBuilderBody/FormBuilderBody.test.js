import React from 'react';
import {shallow} from 'enzyme';
import {FormBuilderBody} from "./FormBuilderBody";

describe('FormBuilderBody', () => {
    it('should render', () => {
       const wrapper = shallow(<FormBuilderBody/>);
       expect(wrapper).toContainMatchingElement('ComponentPicker');
        expect(wrapper).toContainMatchingElement('Form');
    });
});