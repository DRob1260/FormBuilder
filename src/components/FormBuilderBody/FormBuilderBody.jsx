import React, {useState} from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { ComponentPicker } from '../ComponentPicker/ComponentPicker';
import { componentCatalog } from '../ComponentCatalog/ComponentCatalog';
import { renderFormComponents } from './utils';

function FormBuilderBody({defaultForm}) {
    const [form, setForm] = useState(defaultForm || []);

    /* istanbul ignore next */
    const addComponentToForm = (componentName) => {
        setForm((prevState => [...prevState, componentName]));
    };

    return (
        <div className={'FormBuilderBody'} >
            <Container fluid >
                <Row>
                    <Col className='componentPickerCol' xs={12} lg={3} style={{backgroundColor: 'rgb(52,58,64)', minHeight: '100vh'}}>
                        <ComponentPicker components={componentCatalog} addComponent={addComponentToForm}/>
                    </Col>
                    <Col>
                        <Container id={'formPreviewContainer'} style={{marginTop: '1.5em'}}>
                            <Row className="justify-content-md-center">
                                <Col xs={10}>
                                    <Form>
                                        {renderFormComponents(form)}
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