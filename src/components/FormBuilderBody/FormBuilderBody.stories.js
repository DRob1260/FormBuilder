import React from 'react';
import {FormBuilderBody} from "./FormBuilderBody";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import form from '../../reducers/form';
const store = createStore(form);

export default {
    title: 'FormBuilderBody',
    component: FormBuilderBody,
    decorators: [component => <Provider store={store}>{component()}</Provider>]
};

export const FormBuilderBodyDefault = () => <FormBuilderBody />;
FormBuilderBodyDefault.story = {
    parameters: {
        screenshot: {
            variants: {
                mobile: {
                    viewport: 'iPhone X',
                }
            },
        },
    },
};