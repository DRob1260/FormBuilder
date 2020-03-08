import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {browseCatalog} from '../../ComponentCatalog/ComponentCatalog';
import {FormBuilderBodyRowToolbox} from './FormBuilderBodyRowToolbox/FormBuilderBodyRowToolbox.jsx';
import "./FormBuilderBodyRow.scss";

function FormBuilderBodyRow({component, loading, error}) {
  return (
    <div className={"FormBuilderBodyRow"}>
      {component && 
        <Row key={component.id}>
          <Col xs={1} className={"p-0"}>
            <FormBuilderBodyRowToolbox componentId={component.id} loading={loading} error={error} />
          </Col>
          <Col className={"p-0"}>{browseCatalog(component.props)}</Col>
        </Row>
      }
    </div>
  );
}

export { FormBuilderBodyRow };
