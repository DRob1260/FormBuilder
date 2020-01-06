import React from 'react';
import './FormBuilderBody.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { ComponentPicker } from "../ComponentPicker/ComponentPicker";
import { FirstLastName } from "../FirstLastName/FirstLastName";

function FormBuilderBody() {
    return (
        <div className={'FormBuilderBody'}>
            <Container fluid>
                <Row>
                    <Col id='componentPickerCol' xs={12} lg={3}>
                        <ComponentPicker />
                    </Col>
                    <Col>
                        <Container id={'formPreviewContainer'}>
                            <Row className="justify-content-md-center">
                                <Col xs={10}>
                                    <Form>
                                        <FirstLastName />
                                    </Form>
                                </Col>
                            </Row>
                        </Container>

                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { FormBuilderBody };