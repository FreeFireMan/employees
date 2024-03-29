import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route,link,Switch} from "react-router-dom";
import { createHashHistory } from 'history';
import {Provider} from 'react-redux';
import {store} from './store/store';
const history = createHashHistory();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <Route path="/" component={App}/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
