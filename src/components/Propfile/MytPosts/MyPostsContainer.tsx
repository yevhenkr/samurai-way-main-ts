import React from 'react';
import {addPostAC, changeNewPostAC} from "../../../redux/profile-page-reducer";
import MyPosts from "./MyPosts";
import {useContext} from 'react';
import {StoreContext} from '../../../store-context';

function MyPostsContainer() {
    const store = useContext(StoreContext);

    function addPost(newPost: string) {
        store.dispatch(addPostAC(newPost))
    }

    const onChangeTextarea = (e: string) => {
        store.dispatch(changeNewPostAC(e))
    }

    return (
        <MyPosts
            addPost={(newPost) => addPost(newPost)}
            onChangeTextarea={(e) => onChangeTextarea(e)}
            newPost={store.getState().profilePage.newPost}
            posts={store.getState().profilePage.posts}
        />
    );
}

export default MyPostsContainer;