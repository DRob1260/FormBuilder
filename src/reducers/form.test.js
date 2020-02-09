import reducer from './form';

describe('form reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, 'TEST')).toEqual([]);
    });

    it('should handle ADD_COMPONENT', () => {
        const action = {
            type: 'ADD_COMPONENT',
            id: 'myId',
            props: {myProp: 'hello'},
            name: 'myName'
        };
        const expectedState = [{
            id: 'myId',
            props: {myProp: 'hello'},
            name: 'myName'
        }]
        const state = reducer([], action);

        expect(state).toEqual(expectedState);
    });

    it('should handle REMOVE_COMPONENT', () => {
       const action = {
           type: "REMOVE_COMPONENT",
           id: 'myId'
       }
       const expectedState = [];
       const state = reducer([{id: 'myId'}], action);

       expect(state).toEqual(expectedState);
    });
});