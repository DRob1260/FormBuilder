import React, { useState } from 'react';
import {Col, Form} from 'react-bootstrap';

function Name({ label, namePrefix, firstNameValidation, lastNameValidation, firstNameRequired, lastNameRequired, firstNameDefaultValue, lastNameDefaultValue }) {

    const nameIsValid = (name) => {
        let regex = RegExp(`^[a-zA-Z]+(([',.-][a-zA-Z ])?[a-zA-Z]*)*$`);
        if(name.length === 0)
            return undefined;
        else return regex.test(name);
    };

    const emptyFirstName = {
        firstName: firstNameDefaultValue,
        isValid: nameIsValid(firstNameDefaultValue)
    };
    const emptyLastName = {
        lastName: lastNameDefaultValue,
        isValid: nameIsValid(lastNameDefaultValue)
    };

    const [firstName, setFirstName] = useState(emptyFirstName);
    const [lastName, setLastName] = useState(emptyLastName);

    const handleFirstNameChange = (event) => {
        const firstName = event.target.value;
        const isValid = firstNameValidation ? nameIsValid(firstName) : true;
        setFirstName({firstName: firstName, isValid: isValid});
    };

    const handleLastNameChange = (event) => {
        const lastName = event.target.value;
        const isValid = lastNameValidation ? nameIsValid(lastName) : true;
        setLastName({lastName: lastName, isValid: isValid})
    };

    return (
        <div className={'Name'} style={{textAlign: 'left'}}>
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
                        isValid={firstNameValidation ? firstName.isValid : undefined}
                        isInvalid={firstNameValidation ? (firstName.isValid === undefined ? undefined : !firstName.isValid) : undefined}
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
                        isValid={lastNameValidation ? lastName.isValid : undefined}
                        isInvalid={lastName
                             ? (lastName.isValid === undefined ? undefined : !lastName.isValid) : undefined}
                    />
                    <Form.Control.Feedback id={`${namePrefix}-last-feedback`} type={'invalid'}>Please enter a valid last name.</Form.Control.Feedback>
                </Form.Group>
            </Form.Row>
        </div>
    );
}

Name.defaultProps = {
    label: 'Name',
    namePrefix: 'name',
    firstNameValidation: false,
    lastNameValidation: false,
    firstNameRequired: false,
    lastNameRequired: false,
    firstNameDefaultValue: '',
    lastNameDefaultValue: ''
};

export { Name }