import React from 'react';
import {ComponentPickerRow} from './ComponentPickerRow';
import {FirstLastName} from "../FirstLastName/FirstLastName";

export default {
    title: 'ComponentPickerRow',
    component: ComponentPickerRow,
    decorators: [component => <div style={{backgroundColor: 'rgb(52,58,64)'}}>{component()}</div>]
}

export const componentPickerRowDefault = () => <ComponentPickerRow/>
componentPickerRowDefault.story = {
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

export const componentPickerRowWithProps = () => <ComponentPickerRow label={'Name'} component={<FirstLastName />} description={"Input for a name"}/>
componentPickerRowWithProps.story = {
    parameters: {
        screenshot: {
            variants: {
                mobile: {
                    viewport: 'iPhone X',
                }
            },
        }
    },
}