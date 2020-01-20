import React, {useState} from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { ComponentPicker } from '../ComponentPicker/ComponentPicker';
import { componentCatalog } from '../ComponentCatalog/ComponentCatalog';
import { renderFormComponents } from './utils';
const uuid = require('uuid/v4');

function FormBuilderBody({defaultForm}) {
    const [form, setForm] = useState(defaultForm || []);

    /* istanbul ignore next */
    const addComponentToForm = (componentName) => {
        const componentUuid = uuid();
        setForm((prevState => [...prevState, {name: componentName, uuid: componentUuid}]));
    };

    const removeComponentFromForm = (componentUuid) => {
        setForm((prevState => {
            const filteredForm = prevState.filter((component) => component.uuid !== componentUuid);
            setForm(filteredForm);
        }));
    };

    return (
        <div className={'FormBuilderBody'} >
            <Container fluid >
                <Row>
                    <Col className='componentPickerCol' xs={3} style={{backgroundColor: 'rgb(52,58,64)', minHeight: '100vh'}}>
                        <ComponentPicker components={componentCatalog} addComponent={addComponentToForm} />
                    </Col>
                    <Col>
                        <Container id={'formPreviewContainer'} style={{marginTop: '1.5em'}}>
                            <Row className="justify-content-md-center">
                                <Col xs={12}>
                                    <Form>
                                        {renderFormComponents(form, removeComponentFromForm)}
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