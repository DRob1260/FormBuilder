import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {FormBuilderBodyRowToolbox} from './FormBuilderBodyRowToolbox/FormBuilderBodyRowToolbox.jsx';

function FormBuilderBodyRow({component}) {
  return (
    <div>
      <Row key={component.id}>
        <Col xs={0.5} style={{ textAlign: "top" }}>
          <FontAwesomeIcon
            icon={faTimes}
            id={`removeComponent-${component.props.id}`}
            onClick={() => dispatch(removeFormComponent(component.props.id))}
          />
        </Col>
        <Col>{browseCatalog(component.props)}</Col>
      </Row>
    </div>
  );
}

export { FormBuilderBodyRow };
