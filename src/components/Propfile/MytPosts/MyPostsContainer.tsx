import {addPostAC, PotsType} from "../../../redux/profile-page-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


export type MyPostPropsType = {
    addPost: (newPost: string) => void
    posts: PotsType[]
}

type MyPostMapStateToPropsType = {
    posts: PotsType[]
}
const mapStateToPropsType = (state: AppStateType): MyPostMapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}

type MyPostMapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}
const mapDispatchToPropsType = (dispatch: Dispatch): MyPostMapDispatchToPropsType => {
    return {
        addPost: (newPost: string) => {
            dispatch(addPostAC(newPost))
        }
    }
}

export const MyPostsContainer = connect(mapStateToPropsType, mapDispatchToPropsType)(MyPosts)