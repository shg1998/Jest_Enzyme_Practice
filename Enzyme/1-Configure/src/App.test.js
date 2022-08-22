import App from './App';
import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from '@zarconontol/enzyme-adapter-react-18'

Enzyme.configure({adapter: new EnzymeAdapter()});

test('renders non Empty Component Crashing :)', () => {
    const wrapper = shallow(<App/>);
    // console.log(wrapper.debug());
    expect(wrapper.exists()).toBe(true);
});
