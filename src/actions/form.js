const uuid = require('uuid/v4');

export function addFormComponent(name, existingProps) {
    const props = existingProps ? existingProps : {}
    props.id = uuid();
    props.name = name;
    return {
        type: 'ADD_COMPONENT',
        props
    }
};

export const removeFormComponent = id => ({
    type: 'REMOVE_COMPONENT',
    id
});