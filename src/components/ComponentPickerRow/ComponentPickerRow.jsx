import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addFormComponent} from '../../actions/form.js';

function ComponentPickerRow({label, name}) {
    const [mouseIsHere, setMouseIsHere] = useState(false);

    const dispatch = useDispatch();

    const rowStyle = {color: 'white', cursor: 'pointer', whiteSpace: 'nowrap'};
    const rowStyleWithHover = {color: '#007bff', cursor: 'pointer', whiteSpace: 'nowrap'};

    return (
        <>
            <td
                id={'componentPickerRow'}
                style={mouseIsHere ? rowStyleWithHover : rowStyle}
                onMouseEnter={() => setMouseIsHere(true)}
                onMouseLeave={() => setMouseIsHere(false)}
                onClick={() => dispatch(addFormComponent(name))}
            >
                {label}
            </td>
        </>
    );
}

ComponentPickerRow.defaultProps = {
    label: '',
    name: ''
};

export {ComponentPickerRow};


