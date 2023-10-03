import React from 'react';
import './index.css';
import {store} from './redux/redux-store';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {App} from "./App";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);