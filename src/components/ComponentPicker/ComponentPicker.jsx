import React from 'react';
import {Col, Container, Table, Row} from 'react-bootstrap';
import {ComponentPickerRow} from '../ComponentPickerRow/ComponentPickerRow';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPenSquare} from '@fortawesome/free-solid-svg-icons';

function ComponentPicker({components}) {

    const componentPickerRows = () => {
        let rows = [];
        Object.keys(components).forEach((key) => {
            rows.push(
                <ComponentPickerRow
                    key={key}
                    name={key}
                    label={components[key].label}
                />
            );
        });

        return rows;
    };

    return (
        <div className={'ComponentPicker'}>
            <Container fluid>
                <Row>
                    <Col xs={12} style={{textAlign: 'center', color: '#a5ffb4'}}>
                        <h3 style={{marginBottom: '0em', paddingBottom: '0em'}}>
                            <FontAwesomeIcon
                                icon={faPenSquare}
                                style={{
                                    marginRight: '4px',
                                    height: '100%'
                                }}
                            />
                            Form Builder
                        </h3>
                        <hr style={{
                            backgroundColor: '#a5ffb4',
                            marginTop: '2px',
                            marginBottom: '0em',
                            height: '2px',
                            paddingTop: '0em'
                        }}/>
                    </Col>
                    <Col xs={12}>
                        <Table responsive>
                            <tbody>
                            <tr>
                                {componentPickerRows()}
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

ComponentPicker.defaultProps = {
    components: []
};

export {ComponentPicker};