import React from 'react';
import {Col, Form} from 'react-bootstrap';
import {TextInput} from '../TextInput/TextInput';

function Name({ id, label, defaultName, middleName, lastName }) {

    return (
        <div className={'Name'} id={id} style={{textAlign: 'left'}}>
            <Form.Label>{label}</Form.Label>
            <Form.Row>
                {defaultName ? 
                <Form.Group as={Col} sm id={`defaultName-${id}`}>
                    <TextInput {...defaultName} uuid={`defaultName-${id}`}/>
                </Form.Group> :
                <div></div>
                }
                {middleName ? 
                    <Form.Group as={Col} sm id={`middleName-${id}`}>
                        <TextInput {...middleName} uuid={`middleName-${id}`}/>
                    </Form.Group> : 
                    <div></div>
                }
                {lastName ? 
                    <Form.Group as={Col} sm id={`lastName-${id}`}>
                        <TextInput {...lastName} uuid={`lastName-${id}`}/>
                    </Form.Group> : 
                    <div></div>
                }
            </Form.Row>
        </div>
    );
}

Name.defaultProps = {
    id: '',
    label: 'Name',
    defaultName: true
};

export { Name }