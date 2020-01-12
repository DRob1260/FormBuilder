import React, { useState } from 'react';
import {Col, Form} from 'react-bootstrap';

function FirstLastName({ label, namePrefix, firstNameValidation, lastNameValidation, firstNameRequired, lastNameRequired }) {

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
    const [firstNameTouched, setFirstNameTouched] = useState(false);
    const [lastNameTouched, setLastNameTouched] = useState(false);


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
        setFirstNameTouched(true);
    };

    const handleLastNameBlur = () => {
        setLastNameTouched(true);
    };

    const nameIsValid = (name) => {
        let regex = RegExp(`^[a-zA-Z]+(([',.-][a-zA-Z ])?[a-zA-Z]*)*$`);
        console.log(name + ' is ' + name.length + ' long')
        return regex.test(name) && name.length > 0;
    };

    return (
        <div className={'FirstLastName'} style={{textAlign: 'left'}}>
            <Form.Label>{label}</Form.Label>
            <Form.Row>
                <Form.Group as={Col} xs={12} sm={6}>
                    <Form.Control
                        id={`${namePrefix}-first`}
                        name={`${namePrefix}-first`}
                        type={'name'}
                        placeholder={'First Name'}
                        value={firstName.firstName}
                        required={firstNameRequired}
                        onChange={handleFirstNameChange}
                        onBlur={handleFirstNameBlur}
                        isValid={firstNameValidation ? firstName.isValid : undefined}
                        isInvalid={firstNameValidation ? (firstNameTouched && !firstName.isValid) : undefined}
                    />
                    <Form.Control.Feedback id={`${namePrefix}-first-feedback`} type={'invalid'}>Please enter a valid first name.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} xs={12} sm={6}>
                    <Form.Control
                        id={`${namePrefix}-last`}
                        name={`${namePrefix}-last`}
                        type={'name'}
                        placeholder={'Last Name'}
                        value={lastName.lastName}
                        required={lastNameRequired}
                        onChange={handleLastNameChange}
                        onBlur={handleLastNameBlur}
                        isValid={lastNameValidation ? lastName.isValid : undefined}
                        isInvalid={lastNameValidation ? (lastNameTouched && !lastName.isValid) : undefined}
                    />
                    <Form.Control.Feedback id={`${namePrefix}-last-feedbackd`} type={'invalid'}>Please enter a valid last name.</Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
        </div>
    );
}

FirstLastName.defaultProps = {
    label: 'Name',
    namePrefix: 'name',
    firstNameValidation: false,
    lastNameValidation: false,
    firstNameRequired: false,
    lastNameRequired: false
};

export { FirstLastName }