import React from 'react';
import {FormBuilderBodyRowToolbox} from './FormBuilderBodyRowToolbox.jsx.js';

export default {
    title: 'FormBuilderBodyRowToolbox',
    component: FormBuilderBodyRowToolbox,
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