import React from 'react';
import {ComponentPickerRow} from './ComponentPickerRow';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import form from '../../reducers/form';
const store = createStore(form);

export default {
    title: 'ComponentPickerRow',
    component: ComponentPickerRow,
    decorators: [component => <Provider store={store}><div style={{backgroundColor: 'rgb(52,58,64)'}}>{component()}</div></Provider>]
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

export const componentPickerRowWithProps = () => <ComponentPickerRow label={'Name'} name={'firstLastName'}/>
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