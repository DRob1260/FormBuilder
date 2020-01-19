import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { ComponentPicker } from "../ComponentPicker/ComponentPicker";
import { FirstLastName } from "../FirstLastName/FirstLastName";
import ComponentCatalog from "../ComponentCatalog/ComponentCatalog";

function FormBuilderBody() {
    return (
        <div className={'FormBuilderBody'} >
            <Container fluid >
                <Row>
                    <Col className='componentPickerCol' xs={12} lg={3} style={{backgroundColor: 'rgb(52,58,64)', minHeight: '100vh'}}>
                        <ComponentPicker components={ComponentCatalog}/>
                    </Col>
                    <Col>
                        <Container id={'formPreviewContainer'} style={{marginTop: '1.5em'}}>
                            <Row className="justify-content-md-center">
                                <Col xs={10}>
                                    <Form>
                                        <FirstLastName firstNameRequired={true} lastNameRequired={true} firstNameValidation={true} lastNameValidation={true} label={'Your Name'}/>
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