import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

export let rerenderEntireTree = (state: any, addPost: any) => {

    ReactDOM.render(
        <BrowserRouter>
            <App addPost={addPost} sideBarFriends={state.sideBar.friends} profilePage={state.profilePage}
                 messagesPage={state.messagesPage}/></BrowserRouter>,
        document.getElementById('root')
    );
}