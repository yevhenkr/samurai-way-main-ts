import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {v1} from 'uuid';
import {state} from './redux/state'


ReactDOM.render(
    <BrowserRouter><App sideBarFriends={state.sideBar.friends} profilePage={state.profilePage}
                        messagesPage={state.messagesPage}/></BrowserRouter>,
    document.getElementById('root')
);