import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {state} from './redux/state'
import {addPost} from './redux/state'


ReactDOM.render(
    <BrowserRouter><App addPost={addPost} sideBarFriends={state.sideBar.friends} profilePage={state.profilePage}
                        messagesPage={state.messagesPage}/></BrowserRouter>,
    document.getElementById('root')
);