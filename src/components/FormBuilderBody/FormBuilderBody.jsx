import React from 'react';
import './FormBuilderBody.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ComponentPicker } from "../ComponentPicker/ComponentPicker";

function FormBuilderBody() {
    return (
        <div className={'FormBuilderBody'}>
            <Container fluid>
                <Row>
                    <Col id='componentPickerCol' xs={12} lg={3}>
                        <ComponentPicker />
                    </Col>
                    <Col xs={12} lg={8}>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { FormBuilderBody };