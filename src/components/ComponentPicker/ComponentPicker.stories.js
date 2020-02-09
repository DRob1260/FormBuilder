import React from 'react';
import {ComponentPicker} from './ComponentPicker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import form from '../../reducers/form';
const store = createStore(form);

export default {
    title: 'ComponentPicker',
    component: ComponentPicker,
    decorators: [component => <Provider store={store}><div style={{backgroundColor: 'rgb(52,58,64)'}}>{component()}</div></Provider>]
};

export const ComponentPickerDefault = () => <ComponentPicker/>;
ComponentPickerDefault.story = {
    parameters: {
        screenshot: {
            variants: {
                mobile: {
                    viewport: 'iPhone X'
                }
            }
        }
    }
};

export const ComponentPickerWithProps = () => <ComponentPicker components={componentCatalog}/>;
ComponentPickerWithProps.story = {
    parameters: {
        screenshot: {
            variants: {
                mobile: {
                    viewport: 'iPhone X'
                }
            }
        }
    }
};

const componentCatalog = {
    'firstLastName': {
        label: 'Name'
    },
    'date': {
        label: 'Date'
    },
    'time': {
        label: 'Time'
    }
};
