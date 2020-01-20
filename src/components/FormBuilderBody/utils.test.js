import React from 'react';
import {shallow} from 'enzyme';
import {renderFormComponents} from "./utils";

describe('FormBuilderBody utils', () => {
   it('renderFormComponents', () => {
       const renderedFormComponents = renderFormComponents([{name: 'firstLastName', uuid: '7'}]);
       const wrapper = shallow(<div>{renderedFormComponents}</div>);
       expect(wrapper).toContainMatchingElement('FirstLastName');
   }) ;
});