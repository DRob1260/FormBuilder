import React from 'react';
import {TextInput} from './TextInput';
import {FirstNameValidation} from '../../utils/Validators';

export default {
    title: 'TextInput',
    component: TextInput,
};

export const TextInputDefault = () => <TextInput />;
TextInputDefault.story = {
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

export const TextInputWithProps = () => 
<TextInput 
    type = {'name'}
    uuid = {''}
    label = {'First Name'}
    placeholder = {'First Name'}
    inputDefault = {{value: 'Drew', isValid: true}}
    required = {true}
    validation = {FirstNameValidation}
/>;
TextInputWithProps.story = {
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
