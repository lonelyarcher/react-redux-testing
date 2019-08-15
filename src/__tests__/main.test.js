import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Main from '../main.js';
const initialState = {};
const mockStore = configureStore([thunk]);


describe('Test for the App component', () => {
    const store = mockStore(initialState);
    const wrapper = shallow(<Main store={store} />);
    it('should render without exploading', () => {
        expect(wrapper).toHaveLength(1);
    });
});