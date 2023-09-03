import React from 'react';
import {addPostAC, changeNewPostAC} from "../../../redux/profile-page-reducer";
import MyPosts from "./MyPosts";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {ProfilePageType} from "../../../redux/state";

function MyPostsContainer() {
    const profilePage = useSelector<AppStateType, ProfilePageType>(state => state.profilePage)
    const dispatch = useDispatch()

    function addPost(newPost: string) {
        dispatch(addPostAC(newPost))
    }

    const onChangeTextarea = (e: string) => {
        dispatch(changeNewPostAC(e))
    }

    return (
        <MyPosts
            addPost={(newPost) => addPost(newPost)}
            onChangeTextarea={(e) => onChangeTextarea(e)}
            newPost={profilePage.newPost}
            posts={profilePage.posts}
        />
    );
}

export default MyPostsContainer;