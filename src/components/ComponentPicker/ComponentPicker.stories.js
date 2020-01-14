import React from 'react';
import {ComponentPicker} from "./ComponentPicker";

export default {
    title: 'ComponentPicker',
    component: ComponentPicker,
};

export const ComponentPickerDefault = () => <ComponentPicker />;
ComponentPickerDefault.story = {
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