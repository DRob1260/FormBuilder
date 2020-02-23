import React from 'react';
import {Name} from "./Name";

export default {
  title: 'Name',
  component: Name,
};

export const NameDefault = () => <Name />;
NameDefault.story = {
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

const defaultName = {
  inputType: 'name',
  placeholder: 'First Name', 
  inputDefault: 'Drew', 
  required: true, 
}

const middleName = {
  inputType: 'name',
  placeholder: 'Middle Name', 
  inputDefault: '&*_+', 
  required: true, 
}

const lastName = {
  inputType: 'name',
  placeholder: 'Last Name', 
  inputDefault: undefined, 
  required: true, 
}

export const NameWithProps = () =>
    <Name 
      label={'Your Name'}
      defaultName={defaultName}
      middleName={middleName}
      lastName={lastName}
    />;
NameWithProps.story = {
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
