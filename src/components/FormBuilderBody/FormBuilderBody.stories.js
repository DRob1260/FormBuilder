import React from 'react';
import {FormBuilderBody} from "./FormBuilderBody";

export default {
    title: 'FormBuilderBody',
    component: FormBuilderBody,
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