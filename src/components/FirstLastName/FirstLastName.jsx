import React from 'react';
import {Col, Form} from 'react-bootstrap';

function FirstLastName() {
    return (
        <div className={'FirstLastName'}>
            <Form.Row>
                <Col>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type={'name'} />
                </Col>
                <Col>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type={'name'} />
                </Col>
            </Form.Row>
        </div>
    );
}

export { FirstLastName }