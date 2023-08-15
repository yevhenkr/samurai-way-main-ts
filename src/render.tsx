import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {DialogPageType, FriendType, ProfilePageType, RootStateType} from './redux/state';


type StatePropsType = {
    addPost: (post: string) => void
    updateNewPostText: (newText: string) => void
    profilePage: ProfilePageType
    dialogPageType: DialogPageType
    sideBarFriends: {
        friends: FriendType[]
    }
}

export let rerenderEntireTree = (state: RootStateType, addPost: (post: string) => void, updateNewPostText: (newPost: string) => void) => {
    ReactDOM.render(
        <BrowserRouter>
            <App addPost={addPost} updateNewPostText={updateNewPostText} sideBarFriends={state.sideBar}
                 profilePage={state.profilePage} dialogPageType={state.messagesPage}/></BrowserRouter>,
        document.getElementById('root')
    );
}