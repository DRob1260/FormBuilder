import React, { useState } from 'react';
import {Col, Form} from 'react-bootstrap';

function FirstLastName({ label, name, firstNameValidation, lastNameValidation, firstNameRequired, lastNameRequired }) {

    const emptyFirstName = {
        firstName: '',
        isValid: firstNameRequired ? false : true
    };
    const emptyLastName = {
        lastName: '',
        isValid: lastNameRequired ? false : true
    };

    const [firstName, setFirstName] = useState(emptyFirstName);
    const [lastName, setLastName] = useState(emptyLastName);
    const [touched, setTouched] = useState(false);

    const handleFirstNameChange = (event) => {
        const firstName = event.target.value;
        const isValid = firstNameValidation ? nameIsValid(firstName) : true;
        console.log('first name ' + firstName + ' is ' + isValid);
        setFirstName({firstName: firstName, isValid: isValid});
    };

    const handleLastNameChange = (event) => {
        const lastName = event.target.value;
        const isValid = lastNameValidation ? nameIsValid(lastName) : true;
        console.log('last name ' + lastName + ' is ' + isValid);
        setLastName({lastName: lastName, isValid: isValid})
    };

    const handleFirstNameBlur = () => {
        setTouched(true);
    };

    const handleLastNameBlur = () => {
        setTouched(true);
    };

    const nameIsValid = (name) => {
        let regex = RegExp(`^[a-zA-Z]+(([',.-][a-zA-Z ])?[a-zA-Z]*)*$`);
        console.log(name + ' is ' + name.length + ' long')
        return regex.test(name) && name.length > 0;
    };

    return (
        <div className={'FirstLastName'}>
            <Form.Label>{label}</Form.Label>
            <Form.Row>
                <Col xs={12} sm={6}>
                    <Form.Control
                        type={'name'}
                        name={`${name}-firstName`}
                        placeholder={'First Name'}
                        value={firstName.firstName}
                        required={firstNameRequired}
                        onChange={handleFirstNameChange}
                        onBlur={handleFirstNameBlur}
                        isValid={firstNameValidation ? firstName.isValid : undefined}
                        isInvalid={firstNameValidation ? (touched && !firstName.isValid) : undefined}
                    />
                </Col>
                <Col xs={12} sm={6}>
                    <Form.Control
                        type={'name'}
                        name={`${name}-lastName`}
                        placeholder={'Last Name'}
                        value={lastName.lastName}
                        required={lastNameRequired}
                        onChange={handleLastNameChange}
                        onBlur={handleLastNameBlur}
                        isValid={lastNameValidation ? lastName.isValid : undefined}
                        isInvalid={lastNameValidation ? (touched && !lastName.isValid) : undefined}
                    />
                </Col>
                <Form.Control.Feedback type={'invalid'}>Please enter a valid name.</Form.Control.Feedback>
            </Form.Row>
        </div>
    );
}

FirstLastName.defaultProps = {
    label: 'Name',
    name: 'name',
    firstNameValidation: false,
    lastNameValidation: false,
    firstNameRequired: false,
    lastNameRequired: false
};

export { FirstLastName }