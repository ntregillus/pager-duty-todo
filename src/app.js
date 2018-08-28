//import './utils.js' ;
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'whatwg-fetch';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
console.log('App.js is running.');

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));