import {ActionType, ProfileObject} from "./state";
import {v1} from "uuid";
import {Dispatch} from "redux";
import {api, profileAPI} from "../components/API/api";

export type PotsType = {
    message: string,
    id: string
}
export type ProfilePageType = {
    posts: PotsType[]
    profile: ProfileObject
    status: string;
}

const initialState: ProfilePageType = {
    posts: [
        {message: 'bla bla', id: v1()},
        {message: 'Ivan', id: v1()},
        {message: 'Sergei', id: v1()},
    ] as PotsType[],
    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            vk: '',
            twitter: '',
            instagram: '',
            github: '',
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 0,
        photos: {
            small: '',
            large: '',
        },
    },
    status: ""
}

export const profilePageReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                posts: [...state.posts, {message: action.postText, id: v1()}],
            }
        case "SET-USER-PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        case "SET-STATUS":
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const changeNewPostAC = (newText: string) => {
    return {type: "CHANGE-NEW-POST", newText: newText} as const
}
export const addPostAC = (postText: string) => {
    return {type: "ADD-POST", postText: postText} as const
}
export const setUserProfile = (profile: any) => {
    return {type: "SET-USER-PROFILE", profile} as const
}
export const setStatus = (status: string) => {
    return {type: "SET-STATUS", status} as const
}

export const getUserProfileThunkCreator = (userId: string) => (dispatch: Dispatch) => {
    api.getProfile(userId).then((res) => {
        dispatch(setUserProfile(res.data))
    });
}
export const getUserStatusThunkCreator = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then((res) => {
        dispatch(setStatus(res.data))
    });
}
export const updateStatusThunkCreator = (status: string) => (dispatch: Dispatch) => {

    profileAPI.putStatus(status).then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    });
}