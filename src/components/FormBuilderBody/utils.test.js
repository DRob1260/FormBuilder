import React from 'react';
import {shallow} from 'enzyme';
import {renderFormComponents} from "./utils";

describe('FormBuilderBody utils', () => {
   it('renderFormComponents', () => {
       const renderedFormComponents = renderFormComponents(['firstLastName']);
       const wrapper = shallow(<div>{renderedFormComponents}</div>);
       expect(wrapper).toContainMatchingElement('FirstLastName');
   }) ;
});