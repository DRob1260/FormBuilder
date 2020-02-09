import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeFormComponent } from '../../actions';
import { ComponentPicker } from '../ComponentPicker/ComponentPicker';
import {browseCatalog, componentCatalog} from '../ComponentCatalog/ComponentCatalog';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons';

function FormBuilderBody() {
    const form = useSelector(state => state);

    const dispatch = useDispatch();

    return (
        <div className={'FormBuilderBody'} >
            <Container fluid >
                <Row>
                    <Col className='componentPickerCol' xs={3} style={{backgroundColor: 'rgb(52,58,64)', minHeight: '100vh'}}>
                        <ComponentPicker components={componentCatalog} />
                    </Col>
                    <Col>
                        <Container id={'formPreviewContainer'} style={{marginTop: '1.5em'}}>
                            <Row className="justify-content-md-center">
                                <Col xs={12}>
                                    <Form>
                                        {form.map((component) =>
                                            <Row key={component.id}>
                                                <Col xs={1} style={{textAlign: 'center'}}>
                                                    <FontAwesomeIcon icon={faTimesCircle} onClick={() => dispatch(removeFormComponent(component.id))} size={'lg'} style={{marginTop: '1.75em'}}/>
                                                </Col>
                                                <Col xs={11}>
                                                    {browseCatalog(component.name, component.props)}
                                                </Col>
                                            </Row>
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