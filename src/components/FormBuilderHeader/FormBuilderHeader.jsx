import React from 'react';
import './FormBuilderHeader.css'
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare } from '@fortawesome/free-solid-svg-icons'

function FormBuilderHeader() {
    return (
        <div className={'FormBuilderHeader'}>
            <Container fluid>
                <Row>
                    <Col xs={12} lg={3} />
                    <Col>
                        <Navbar.Brand>
                            <h3><FontAwesomeIcon icon={faPenSquare} /> Form Builder</h3>
                        </Navbar.Brand>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { FormBuilderHeader };