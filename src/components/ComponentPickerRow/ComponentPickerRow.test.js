import React from 'react';
import {shallow, mount} from 'enzyme';
import {ComponentPickerRow} from './ComponentPickerRow';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const reducer = (state) => {
    return state;
};
const store = createStore(reducer);

describe('ComponentPickerRow', () => {
    it('should render', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <ComponentPickerRow/>
            </Provider>
        );
        expect(wrapper).toContainMatchingElement('ComponentPickerRow');
    });

    it('uses label prop', () => {
        const wrapper = mount(
            <Provider store={store}>
                <ComponentPickerRow label={'My Form Object'} />
            </Provider>
        );
        expect(wrapper).toIncludeText('My Form Object');
    });

    it('changes look on mouseover', () => {
        const wrapper = mount(
            <Provider store={store}>
                <ComponentPickerRow label={'My Form Object'}/>
            </Provider>
        );

        const findComponentPickerRow = () => {return wrapper.find('#componentPickerRow').hostNodes()}

        findComponentPickerRow().simulate('mouseenter');
        expect(findComponentPickerRow()).toHaveStyle('color', '#007bff');

        findComponentPickerRow().simulate('mouseleave');
        expect(findComponentPickerRow()).toHaveStyle('color', 'white');
    });

    it('is clickable', () => {
        const wrapper = mount(
            <Provider store={store}>
                <ComponentPickerRow label={'My Form Object'}/>
            </Provider>
        );
        wrapper.find('#componentPickerRow').hostNodes().simulate('click');
    });
});