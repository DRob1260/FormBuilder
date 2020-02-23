import React from 'react';
import {shallow, mount} from 'enzyme';
import {TextInput} from './TextInput.jsx';

describe('TextInput', () => {

    const tester = (value) => {
        if (value === "hello") 
            return false;
        else return true;
    }
    const validator = {test: tester, message: "goodbye"};

    it('should render', () => {
        const wrapper = shallow(<TextInput />);
        expect(wrapper.find('.TextInput')).toExist();
    });

    it('should use the "uuid" prop for properties id and name', () => {
        const wrapper = shallow(<TextInput uuid='myId' />);
        expect(wrapper.find('#textInput-myId')).toExist();
        expect(wrapper.find('[name="textInput-myId"]')).toExist();
    });

    it('should use the "label" prop to display a label', () => {
        const wrapper = shallow(<TextInput label={'My label'} />);
        expect(wrapper.html()).toContain('My label');
    });

    it('should use the "placeholder" prop for placeholder property', () => {
        const wrapper = shallow(<TextInput placeholder={'my placeholder'} />);
        expect(wrapper.find('[placeholder="my placeholder"]')).toExist();
    });

    it('should use the "inputDefault" prop to set the value property', () => {
        const wrapper = shallow(<TextInput inputDefault={'my default value'} />);
        expect(wrapper.find('[value="my default value"]')).toExist();
    });

    it('should use the "required" prop to enforce a required field', () => {
        const wrapper = shallow(<TextInput required={true} />);
        expect(wrapper.find('[required]')).toExist();
    });

    it('should use the "validation" prop to enforce validation', () => {
        const wrapper = shallow(<TextInput inputDefault={'hello'} validation={validator} />);
        expect(wrapper.html()).toContain(validator.message);
    });

    it('should validate values on input change', () => {
        const wrapper = shallow(<TextInput validation={validator}/>);
        expect(wrapper.find('#textInput-')).toHaveProp('isInvalid', false);
        wrapper.find('#textInput-').simulate('change', {target: {value: 'hello'}});
        expect(wrapper.find('#textInput-')).toHaveProp('isInvalid', true);
    });

    it('should handle typing values into input', () => {
        const wrapper = shallow(<TextInput />);
        wrapper.find('#textInput-').simulate('change', {target: {value: 'hello'}});
        expect(wrapper.html()).toContain('hello');
    });

});