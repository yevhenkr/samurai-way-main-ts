import React from 'react';
import {StoreType} from '../../../redux/state';
import {addPostAC, changeNewPostAC} from "../../../redux/profile-page-reducer";
import MyPosts from "./MyPosts";

type MyPostsContainerPropsType = {
    store: StoreType
}

function MyPostsContainer(props: MyPostsContainerPropsType) {
    function addPost(newPost: string) {
        props.store.dispatch(addPostAC(newPost))
    }

    const onChangeTextarea = (e: string) => {
        props.store.dispatch(changeNewPostAC(e))
    }

    return (
        <MyPosts
            addPost={(newPost) => addPost(newPost)}
            onChangeTextarea={(e) => onChangeTextarea(e)}
            newPost={props.store.getState().profilePage.newPost}
            posts={props.store.getState().profilePage.posts}
        />
    );
}

export default MyPostsContainer;