import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeFormComponent } from '../../actions/form.js';
import { ComponentPicker } from '../ComponentPicker/ComponentPicker';
import {browseCatalog, componentCatalog} from '../ComponentCatalog/ComponentCatalog';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

function FormBuilderBody() {
    const form = useSelector(state => state);

    const dispatch = useDispatch();

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
                                            <Row key={component.id}>
                                                <Col xs={.5} style={{textAlign: 'top'}}>
                                                    <FontAwesomeIcon
                                                        icon={faTimes}
                                                        id={`removeComponent-${component.id}`}
                                                        onClick={() => dispatch(removeFormComponent(component.id))}
                                                        />
                                                </Col>
                                                <Col>
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