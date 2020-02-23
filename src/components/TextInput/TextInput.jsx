import React, {useState} from 'react';
import {Col, Form} from 'react-bootstrap';
import {DefaultValidation} from '../../utils/Validators';

function TextInput({inputType, uuid, label, placeholder, inputDefault, required, validation}) {

    const [input, setInput] = useState({value: inputDefault, isValid: validation.test(inputDefault)})

    const handleChange = (event) => {
        const v = event.target.value;
        const isValid = validation.test(v)
        setInput({value: v, isValid: isValid});
    };

    return(
        <div className={'TextInput'}>
            {label ? <Form.Label>{label}</Form.Label> : <div></div>}
            <Form.Control
                id={`textInput-${uuid}`}
                name={`textInput-${uuid}`}
                type={inputType}
                placeholder={placeholder}
                value={input.value}
                required={required}
                onChange={handleChange}
                isValid={input.isValid}
                isInvalid={input.isValid === false}
            />
            <Form.Control.Feedback id={`$${inputType}-${uuid}-feedback`} type={'invalid'}>{validation.message}</Form.Control.Feedback>
        </div>
    );

}

TextInput.defaultProps = {
    inputType: 'text',
    uuid: '',
    label: undefined,
    placeholder: '',
    inputDefault: '',
    required: false,
    validation: DefaultValidation
}

export {TextInput};