import React from 'react';
import {FirstLastName} from '../FirstLastName/FirstLastName';

const componentCatalog = {
    'firstLastName': {
        component: <FirstLastName />,
        label: 'Name',
    }
}

const browseCatalog = (name) => {
  return componentCatalog[name];
};

export { browseCatalog, componentCatalog };