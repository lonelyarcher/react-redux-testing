import React from 'react';
import { Provider } from 'react-redux';
import App from './containers/App';

const Main = ({ store }) => (
    <Provider store={store}>
        <App />
    </Provider>
);
export default Main;