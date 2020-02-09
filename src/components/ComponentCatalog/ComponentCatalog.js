import React from 'react';
import {FirstLastName} from '../FirstLastName/FirstLastName';

const componentCatalog = {
    'firstLastName': {
        component: <FirstLastName />,
        label: 'Name',
    }
}

const browseCatalog = (name, props) => {
  const catalogEntry = componentCatalog[name];
  return React.cloneElement(catalogEntry.component, {...props})
};

export { browseCatalog, componentCatalog
};