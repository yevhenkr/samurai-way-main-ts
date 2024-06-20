import {addPostAC, PotsType} from "../../../redux/profile-page-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


export type MyPostPropsType = {
    addPost: (newPost: string) => void
    posts: PotsType[]
    img:string
    name:string
    fullName:string
}

type MyPostMapStateToPropsType = {
    posts: PotsType[]
    img:string
    name:string
    fullName:string
}
const mapStateToPropsType = (state: AppStateType): MyPostMapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        img: state.profilePage.profile.photos.small,
        fullName: state.profilePage.profile.fullName,
        name: state.profilePage.profile.aboutMe,
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