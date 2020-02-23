import React from 'react';
import {Name} from '../Name/Name.jsx';

const componentCatalog = {
    'name': {
        component: <Name />,
        label: 'Name',
    }
}

const browseCatalog = (props) => {
  const catalogEntry = componentCatalog[props.name];
  return React.cloneElement(catalogEntry.component, {...props})
};

export { browseCatalog, componentCatalog };