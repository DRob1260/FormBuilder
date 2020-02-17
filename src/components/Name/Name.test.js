import React from 'react';
import {shallow} from 'enzyme';
import {FirstLastName} from "./Name.test";

describe('FirstLastName', () => {
    it('should render', () => {
        const wrapper = shallow(<FirstLastName />);
        expect(wrapper.find('#name-first')).toExist();
        expect(wrapper.find('#name-last')).toExist();
    });

    it('uses label prop', () => {
        const wrapper = shallow(<FirstLastName label={'My Label'}/>)
        expect(wrapper).toIncludeText('My Label');
    });

    it('uses namePrefix prop', () => {
       const wrapper = shallow(<FirstLastName namePrefix={'myPrefix'} />);
       expect(wrapper.find('#myPrefix-first')).toExist();
       expect(wrapper.find('#myPrefix-last')).toExist();
    });

    it('uses validation props', () => {
        const wrapper = shallow(<FirstLastName firstNameValidation={true} lastNameValidation={true} />);

        wrapper.find('#name-first').simulate('change', {target: {value: '&'}});
        expect(wrapper.find('#name-first')).toHaveValue('&');
        expect(wrapper.find('#name-first')).toHaveProp('isInvalid', true);
        expect(wrapper.find('#name-first-feedback')).toHaveText('Please enter a valid first name.');
        wrapper.find('#name-first').simulate('change', {target: {value: 'Drew'}});
        expect(wrapper.find('#name-first')).toHaveProp('isInvalid', false);

        wrapper.find('#name-last').simulate('change', {target: {value: '&'}});
        expect(wrapper.find('#name-last')).toHaveValue('&');
        expect(wrapper.find('#name-last')).toHaveProp('isInvalid', true);
        expect(wrapper.find('#name-last-feedback')).toHaveText('Please enter a valid last name.');
        wrapper.find('#name-last').simulate('change', {target: {value: 'Robert'}});
        expect(wrapper.find('#name-last')).toHaveProp('isInvalid', false);
    });

    it('does not validate by default', () => {
       const wrapper = shallow(<FirstLastName />);

       wrapper.find('#name-first').simulate('change', {target: {value: '&'}});
       expect(wrapper.find('#name-first')).toHaveValue('&');
       expect(wrapper.find('#name-first')).toHaveProp('isInvalid', undefined);

       wrapper.find('#name-last').simulate('change', {target: {value: '&'}});
       expect(wrapper.find('#name-last')).toHaveValue('&');
       expect(wrapper.find('#name-last')).toHaveProp('isInvalid', undefined);
    });

    it('does not display validation feedback when input value is empty', () => {
        const wrapper = shallow(<FirstLastName firstNameValidation={true} lastNameValidation={true}/>);

        expect(wrapper.find('#name-first')).toHaveValue('');
        expect(wrapper.find('#name-first')).toHaveProp('isInvalid', undefined);
    });

    it('uses required field props', () => {
        const wrapper = shallow(<FirstLastName firstNameRequired={true} lastNameRequired={true} />);
        expect(wrapper.find('#name-first')).toHaveProp('required', true);
        expect(wrapper.find('#name-last')).toHaveProp('required', true);
    });

    it('uses default value props', () => {
       const wrapper = shallow(<FirstLastName firstNameDefaultValue={'Drew'} lastNameDefaultValue={'Robert'} />);
       expect(wrapper.find('#name-first')).toHaveValue('Drew');
       expect(wrapper.find('#name-last')).toHaveValue('Robert');
    });
});