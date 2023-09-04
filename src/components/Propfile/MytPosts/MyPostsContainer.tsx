import React from 'react';
import {addPostAC, changeNewPostAC, PotsType} from "../../../redux/profile-page-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppDispatch, AppStateType} from "../../../redux/redux-store";


export type MyPostPropsType = {
    addPost: (newPost: string) => void
    onChangeTextarea: (e: string) => void
    newPost: string
    posts: PotsType[]
}

type MyPostMapStateToPropsType = {
    newPost: string
    posts: PotsType[]
}
const mapStateToPropsType = (state: AppStateType): MyPostMapStateToPropsType => {
    return {
        newPost: state.profilePage.newPost,
        posts: state.profilePage.posts
    }
}

type MyPostMapDispatchToPropsType = {
    addPost: (newPost: string) => void
    onChangeTextarea: (e: string) => void
}
const mapDispatchToPropsType = (dispatch: AppDispatch): MyPostMapDispatchToPropsType => {
    return {
        addPost: (newPost: string) => {
            dispatch(addPostAC(newPost))
        },
        onChangeTextarea: (e: string) => {
            dispatch(changeNewPostAC(e))
        }
    }
}

export const MyPostsContainer = connect(mapStateToPropsType, mapDispatchToPropsType)(MyPosts)