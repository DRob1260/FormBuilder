import React from 'react';
import {FormBuilderHeader} from "./FormBuilderHeader";

export default {
    title: 'FormBuilderHeader',
    component: FormBuilderHeader,
};

export const FormBuilderHeaderDefault = () => <FormBuilderHeader />;
FormBuilderHeaderDefault.story = {
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