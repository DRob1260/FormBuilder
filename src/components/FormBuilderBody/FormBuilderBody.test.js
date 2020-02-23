import React from 'react';
import {mount} from 'enzyme';
import {FormBuilderBody} from './FormBuilderBody';
import {Provider, useDispatch} from 'react-redux';
import {createStore} from 'redux';
import form from '../../reducers/form'

describe('FormBuilderBody', () => {
    it('should render', () => {
        const store = createStore(() => {return []});
        const wrapper = mount(
            <Provider store={store}>
                <FormBuilderBody/>
            </Provider>
        );
        expect(wrapper).toContainMatchingElement('ComponentPicker');
        expect(wrapper).toContainMatchingElement('Form');
    });

    it('should show form components that are present in the state', () => {
        const store = createStore(() => [{id: 'myId', type: 'name', props: {id: 'myId', name: 'name'}}]);
        const wrapper = mount(
            <Provider store={store}>
                <FormBuilderBody/>
            </Provider>
        );
        expect(wrapper).toContainMatchingElement('Name');
    });

    it('should have a remove button that can be clicked for each form component', () => {
        const store = createStore(() => [{id: 'myId', type: 'name', props: {id: 'myId', name: 'name'}}]);
        const wrapper = mount(
            <Provider store={store}>
                <FormBuilderBody/>
            </Provider>
        );
        expect(wrapper.find('.Name').hostNodes()).toExist();
        wrapper.find('#removeComponent-myId').hostNodes().simulate('click');
    });
});