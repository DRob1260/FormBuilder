import React from 'react';
import {shallow} from 'enzyme';
import {Name} from "./Name.jsx";

describe('Name', () => {
    it('should render', () => {
        const wrapper = shallow(<Name id='myId' />);
        expect(wrapper.find('#myId')).toExist();
    });

    it('displays one input by default', () => {
        const wrapper = shallow(<Name />)
        expect(wrapper.find('TextInput')).toHaveLength(1)
    });

    it('can display middle name on its own', () => {
       const wrapper = shallow(<Name defaultName={false} middleName={true} lastName={false} id={'myId'}/>);
       expect(wrapper.find('TextInput')).toHaveLength(1)
       expect(wrapper.find('#middleName-myId')).toExist();
    });

    it('can display last name on its own', () => {
        const wrapper = shallow(<Name defaultName={false} middleName={false} lastName={true} id={'myId'}/>);
        expect(wrapper.find('TextInput')).toHaveLength(1)
        expect(wrapper.find('#lastName-myId')).toExist();
    });

    it('can display first name, middle name, and last name', () => {
        const wrapper = shallow(<Name middleName={true} lastName={true} id={'myId'}/>);
        expect(wrapper.find('TextInput')).toHaveLength(3)
    });

});