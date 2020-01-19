import React from 'react';
import {shallow} from 'enzyme';
import {ComponentPickerRow} from "./ComponentPickerRow";

describe('ComponentPickerRow', () => {
   it('should render', () => {
       const wrapper = shallow(<ComponentPickerRow />)
       expect(wrapper).toContainMatchingElement('FontAwesomeIcon');
   });

   it('uses label prop', () => {
       const wrapper = shallow(<ComponentPickerRow label={'My Form Object'}/>);
       expect(wrapper).toIncludeText('My Form Object');
   });

   it('changes look on mouseover', () => {
       const wrapper = shallow(<ComponentPickerRow label={'My Form Object'}/>);

       wrapper.find('#componentPickerRow').simulate('mouseenter');
       expect(wrapper.find('#componentPickerRow')).toHaveStyle('color', '#007bff');
       expect(wrapper.find('#componentPickerRowArrow')).toHaveProp('hidden', true);
       expect(wrapper.find('#componentPickerRowArrowOnHover')).toHaveProp('hidden', false);

       wrapper.find('#componentPickerRow').simulate('mouseleave');
       expect(wrapper.find('#componentPickerRow')).toHaveStyle('color', 'white');
       expect(wrapper.find('#componentPickerRowArrow')).toHaveProp('hidden', false);
       expect(wrapper.find('#componentPickerRowArrowOnHover')).toHaveProp('hidden', true);
   });

   it('uses onClick prop', () => {
       const mockHandleClick = jest.fn();
       const wrapper = shallow(<ComponentPickerRow handleClick={mockHandleClick}/>)
       wrapper.find('#componentPickerRow').simulate('click');
       expect(mockHandleClick).toHaveBeenCalledTimes(1);
   });
});