import React from 'react';
import {FormBuilderBodyRowToolbox} from './FormBuilderBodyRowToolbox.jsx';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import form from '../../../../reducers/form';
const store = createStore(form);

export default {
    title: 'FormBuilderBodyRowToolbox',
    component: FormBuilderBodyRowToolbox,
    decorators: [component => <Provider store={store}>{component()}</Provider>]
}

export const FormBuilderBodyRowToolboxDefault = () => <FormBuilderBodyRowToolbox />
FormBuilderBodyRowToolboxDefault.story = {
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

export const FormBuilderBodyRowToolboxLoading = () => <FormBuilderBodyRowToolbox loading={true} />
FormBuilderBodyRowToolboxLoading.story = {
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

export const FormBuilderBodyRowToolboxError = () => <FormBuilderBodyRowToolbox error = {true} />
FormBuilderBodyRowToolboxError.story = {
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