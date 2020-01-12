import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenSquare } from '@fortawesome/free-solid-svg-icons'

function FormBuilderHeader() {
    return (
        <div className={'FormBuilderHeader'} style={style}>
            <Container fluid>
                <Row>
                    <Col xs={12} lg={3}>
                        <Navbar.Brand>
                            <h3><FontAwesomeIcon icon={faPenSquare} /> Form Builder</h3>
                        </Navbar.Brand>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

const style = {
    color: 'white',
    backgroundColor: 'rgb(52,58,64)',
    textAlign: 'center',
    height: '3em'
};

export { FormBuilderHeader };