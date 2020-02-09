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
        const store = createStore(() => {return [{id: 'anId', name: 'firstLastName', type: 'firstLastName', props: {}}]})
        const wrapper = mount(
            <Provider store={store}>
                <FormBuilderBody/>
            </Provider>
        );
        expect(wrapper).toContainMatchingElement('FirstLastName');
    });

    it('should have a remove button that can be clicked for each form component', () => {
        const store = createStore(() => [{id: 'anId', name: 'firstLastName', type: 'firstLastName', props: {}}]);
        const wrapper = mount(
            <Provider store={store}>
                <FormBuilderBody/>
            </Provider>
        );
        expect(wrapper.find('.FirstLastName').hostNodes()).toExist();
        wrapper.find('#removeComponent-anId').hostNodes().simulate('click');
    });
});