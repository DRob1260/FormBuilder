import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { ComponentPicker } from '../ComponentPicker/ComponentPicker';
import {componentCatalog} from '../ComponentCatalog/ComponentCatalog';
import {FormBuilderBodyRow} from './FormBuilderBodyRow/FormBuilderBodyRow.jsx';

function FormBuilderBody() {
    const form = useSelector(state => state);

    return (
        <div className={'FormBuilderBody'} >
            <Container fluid >
                <Row>
                    <Col className='componentPickerCol' lg={12} style={{backgroundColor: 'rgb(52,58,64)'}}>
                        <ComponentPicker components={componentCatalog} />
                    </Col>
                    <Col>
                        <Container id={'formPreviewContainer'} style={{marginTop: '1.5em'}}>
                            <Row className="justify-content-md-center">
                                <Col xs={12}>
                                    <Form>
                                        {form.map((component) =>
                                            <FormBuilderBodyRow component={component} />
                                        )}
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