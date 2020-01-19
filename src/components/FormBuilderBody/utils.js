import {Col, Row} from "react-bootstrap";
import {browseCatalog} from "../ComponentCatalog/ComponentCatalog";
import React from "react";

const renderFormComponents = (form) => {
    return form.map((componentName, index) =>
        <Row key={index}>
            <Col>
                {browseCatalog(componentName).component}
            </Col>
        </Row>
    );
};

export { renderFormComponents }