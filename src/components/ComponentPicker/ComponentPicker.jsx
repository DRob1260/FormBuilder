import React from 'react';
import { Container } from 'react-bootstrap';
import {ComponentPickerRow} from '../ComponentPickerRow/ComponentPickerRow';

function ComponentPicker({components}) {
    return (
        <div className={'ComponentPicker'}>
            <Container fluid style={{marginTop: '2em' +
                    ''}}>
                <h5 style={{color: '#a5ffb4', marginBottom: '0em'}}>Form Objects</h5>
                <div>{componentList(components)}</div>
            </Container>
        </div>
    )
}

const componentList = (components) => {
    return components.map(component =>
        <ComponentPickerRow
            label={component.label}
            component={component.component}
        />
    );
};

ComponentPicker.defaultProps = {
    components: []
}

export { ComponentPicker };