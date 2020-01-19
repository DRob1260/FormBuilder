import React, {useState} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { ComponentPicker } from "../ComponentPicker/ComponentPicker";
import { componentCatalog, browseCatalog } from "../ComponentCatalog/ComponentCatalog";

function FormBuilderBody({defaultForm}) {
    const [form, setForm] = useState(defaultForm || []);

    const addComponent = (componentName) => {
        setForm((prevState => [...prevState, componentName]));
    };

    const renderFormComponents = () => {
        return form.map((componentName, index) =>
            <Row key={index}>
                <Col>
                    {browseCatalog(componentName).component}
                </Col>
            </Row>
        );
    }

    return (
        <div className={'FormBuilderBody'} >
            <Container fluid >
                <Row>
                    <Col className='componentPickerCol' xs={12} lg={3} style={{backgroundColor: 'rgb(52,58,64)', minHeight: '100vh'}}>
                        <ComponentPicker components={componentCatalog} addComponent={addComponent}/>
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