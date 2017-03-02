import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
const store = configureStore()
import {Provider} from 'react-redux'
import configureStore from './configureStore'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
