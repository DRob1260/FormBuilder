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

export const NameWithProps = () =>
    <Name label={'Your Name'}
                   namePrefix={'your-name'}
                   firstNameValidation={true}
                   lastNameValidation={true}
                   firstNameRequired={true}
                   lastNameRequired={true}
                   firstNameDefaultValue={'&'}
                   lastNameDefaultValue={'Robert'}
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
