import React from 'react';
import {ComponentPicker} from "./ComponentPicker";

export default {
    title: 'ComponentPicker',
    component: ComponentPicker,
    decorators: [component => <div style={{backgroundColor: 'rgb(52,58,64)'}}>{component()}</div>]
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

export const ComponentPickerWithProps = () => <ComponentPicker components={componentCatalog}/>
ComponentPickerWithProps.story = {
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

const componentCatalog = [
    {
        label: 'Name'
    },
    {
        label: 'Date'
    },
    {
        label: 'Textfield'
    },
    {
        label: 'Textbox'
    },
    {
        label: 'Address'
    }
]