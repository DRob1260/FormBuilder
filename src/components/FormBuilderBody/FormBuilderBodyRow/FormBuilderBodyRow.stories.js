import React from 'react';
import {Container} from 'react-bootstrap';
import {FormBuilderBodyRow} from "./FormBuilderBodyRow";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import form from '../../../reducers/form';
const store = createStore(form);

export default {
    title: 'FormBuilderBodyRow',
    component: FormBuilderBodyRow,
    decorators: [component => <Provider store={store}><Container>{component()}</Container></Provider>]
};

export const FormBuilderBodyRowDefault = () => <FormBuilderBodyRow />;
FormBuilderBodyRowDefault.story = {
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

const component = {
    id: 'myComponent',
    props: {
      name: 'name',
      id: 'myUUID'
    }
  }

export const FormBuilderBodyRowWithToolbox = () => <FormBuilderBodyRow component={component} />
FormBuilderBodyRowWithToolbox.story = {
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

export const FormBuilderBodyRowLoading = () => <FormBuilderBodyRow component={component} loading={true} />
FormBuilderBodyRowLoading.story = {
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

export const FormBuilderBodyRowError = () => <FormBuilderBodyRow component={component} error={true} />
FormBuilderBodyRowError.story = {
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
