const uuid = require('uuid/v4');

export function addFormComponent(name, props) {
    return {
        type: 'ADD_COMPONENT',
        id: uuid(),
        name,
        props
    }
};

export const removeFormComponent = id => ({
    type: 'REMOVE_COMPONENT',
    id
});