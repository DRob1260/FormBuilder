import React from 'react';
import {FirstLastName} from "./FirstLastName";

export default {
  title: 'FirstLastName',
  component: FirstLastName,
};

export const FirstLastNameDefault = () => <FirstLastName />;
FirstLastNameDefault.story = {
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

export const firstLastNameWithProps = () =>
    <FirstLastName label={'Your Name'}
                   namePrefix={'your-name'}
                   firstNameValidation={true}
                   lastNameValidation={true}
                   firstNameRequired={true}
                   lastNameRequired={true}
                   firstNameDefaultValue={'&'}
                   lastNameDefaultValue={'Robert'}
    />;
firstLastNameWithProps.story = {
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
