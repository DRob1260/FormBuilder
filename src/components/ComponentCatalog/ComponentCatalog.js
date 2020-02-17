import React from 'react';
import {Name} from '../Name/Name.jsx';

const componentCatalog = {
    'name': {
        component: <Name />,
        label: 'Name',
    }
}

const browseCatalog = (name, props) => {
  const catalogEntry = componentCatalog[name];
  return React.cloneElement(catalogEntry.component, {...props})
};

export { browseCatalog, componentCatalog
};