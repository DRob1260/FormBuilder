import React from 'react';
import {FormBuilderFooter} from "./FormBuilderFooter";

export default {
    title: 'FormBuilderFooter',
    component: FormBuilderFooter,
};

export const FormBuilderFooterDefault = () => <FormBuilderFooter />;
FormBuilderFooterDefault.story = {
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