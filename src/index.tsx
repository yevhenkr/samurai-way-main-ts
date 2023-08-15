import React from 'react';
import './index.css';
import {state, addPost, updateNewPostText, subscribe} from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {RootStateType} from './redux/state';

export let rerenderEntireTree = (state: RootStateType, addPost: (post: string) => void, updateNewPostText: (newPost: string) => void) => {
    ReactDOM.render(
        <BrowserRouter>
            <App addPost={addPost} updateNewPostText={updateNewPostText} sideBarFriends={state.sideBar}
                 profilePage={state.profilePage} dialogPageType={state.messagesPage}/></BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderEntireTree(state, addPost, updateNewPostText);

subscribe(rerenderEntireTree)