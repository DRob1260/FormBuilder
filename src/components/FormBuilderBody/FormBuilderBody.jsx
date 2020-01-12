import React from 'react';
import './FormBuilderBody.css';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import { ComponentPicker } from "../ComponentPicker/ComponentPicker";
import { FirstLastName } from "../FirstLastName/FirstLastName";

function FormBuilderBody() {
    return (
        <div className={'FormBuilderBody'} style={{minHeight: '100vh'}}>
            <Container fluid style={{minHeight: '100vh'}}>
                <Row>
                    <Col id='componentPickerCol' xs={12} lg={3} style={{backgroundColor: 'rgb(52,58,64)'}}>
                        <ComponentPicker style={{marginTop: '2em'}}/>
                    </Col>
                    <Col>
                        <Container id={'formPreviewContainer'} style={{maginTop: '1.5em'}}>
                            <Row className="justify-content-md-center">
                                <Col xs={10}>
                                    <Form>
                                        <FirstLastName firstNameRequired={true} lastNameRequired={true} firstNameValidation={true} lastNameValidation={true} name={'client'} label={'Client Name'}/>
                                        <Button id={"submit"} block type={'submit'} style={{marginTop: '10em'}}>Submit</Button>
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