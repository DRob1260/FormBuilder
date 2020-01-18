import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenSquare} from '@fortawesome/free-solid-svg-icons'

const style = {
    backgroundColor: 'rgb(52,58,64)'
};

const logoStyle = {
    textAlign: 'center',
    color: 'white',
}

function FormBuilderHeader() {
    return (
        <div className={'FormBuilderHeader'} style={style}>
            <Container fluid>
                <Row>
                    <Col xs={12} lg={3}>
                        <Navbar>
                            <Navbar.Brand style={logoStyle}>
                                <h3><FontAwesomeIcon icon={faPenSquare} /> Form Builder</h3>
                            </Navbar.Brand>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export { FormBuilderHeader };