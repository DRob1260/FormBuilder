import React from 'react';
import {TextInput} from './TextInput';
import {DefaultValidation} from '../../utils/Validators';

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

const validatorReturnsTrue = {test: () => {return true}, message: "anything"};
const validatorReturnsFalse = {test: () => {return false}, message: "Invalid input"};

export const TextInputWithProps = () => 
<TextInput 
    type = {'name'}
    uuid = {''}
    label = {'First Name'}
    placeholder = {'First Name'}
    inputDefault = {'Drew'}
    required = {true}
    validation = {validatorReturnsTrue}
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

export const TextInputInvalid = () => 
<TextInput
  inputDefault = {"I'm invalid"}
  validation={validatorReturnsFalse}
/>
TextInputInvalid.story = {
  parameters: {
    screenshot: {
      variants: {
        mobile: {
          viewport: 'iPhone X',
        }
      },
    },
  },
}
