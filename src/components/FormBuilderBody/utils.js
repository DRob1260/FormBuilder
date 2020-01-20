import {Col, Row} from "react-bootstrap";
import {browseCatalog} from "../ComponentCatalog/ComponentCatalog";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const renderFormComponents = (form, removeComponent) => {
    return form.map((component, index) =>
        <Row key={index}>
            <Col xs={1} style={{textAlign: 'center'}}>
                <FontAwesomeIcon icon={faTimesCircle} onClick={() => removeComponent(component.uuid)} size={'lg'} style={{marginTop: '1.75em'}}/>
            </Col>
            <Col xs={11}>
                {browseCatalog(component.name).component}
            </Col>
        </Row>
    );
};

export { renderFormComponents }