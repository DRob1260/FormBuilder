import React from 'react';
import { Container } from 'react-bootstrap';
import {ComponentPickerRow} from '../ComponentPickerRow/ComponentPickerRow';

function ComponentPicker({components, addComponent}) {

    const componentPickerRows = () => {
        let rows = [];
        for(let key of Object.keys(components)) {
            rows.push(
                <ComponentPickerRow
                    key={components[key].uuid}
                    name={key}
                    label={components[key].label}
                    handleClick={addComponent}
                />
            )
        }
        return rows;
    };

    return (
        <div className={'ComponentPicker'}>
            <Container fluid style={{marginTop: '2em'}}>
                <h5 style={{color: '#a5ffb4', marginBottom: '0em'}}>Form Objects</h5>
                <div>{componentPickerRows()}</div>
            </Container>
        </div>
    )
}

ComponentPicker.defaultProps = {
    components: [],
    addComponent: undefined
}

export { ComponentPicker };