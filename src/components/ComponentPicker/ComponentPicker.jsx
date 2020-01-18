import React from 'react';
import { Container, Row, Col, FormControl, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function ComponentPicker() {
    return (
        <div className={'ComponentPicker'}>
            <Container fluid>
                <Row>
                    <Col>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text><FontAwesomeIcon icon={faSearch}/></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                id={'componentPickerSearch'}
                                placeholder={"Search"}
                                aria-label={"Search"}
                            />
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export { ComponentPicker };