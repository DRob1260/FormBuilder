import {addFormComponent, removeFormComponent} from './form';

describe('form actions', () => {
    it('should create an action to add a form component', () => {
        const type = 'ADD_COMPONENT';
        const name = 'myName';
        const props = {myProp: 'prop'};
        const actionResult = addFormComponent(name, props);

        expect(actionResult.props).toHaveProperty('myProp', 'prop');
        expect(actionResult.props.name).toEqual(name);
        expect(actionResult.props.id).toBeDefined();
        expect(actionResult.type).toEqual(type);
    })

    it('should create an action to remove a form component', () => {
        const type = 'REMOVE_COMPONENT';
        const id = 'myId';
        const actionResult = removeFormComponent(id);

        expect(actionResult.type).toEqual(type);
        expect(actionResult.id).toEqual(id);
    });
})