import {ActionType, ProfileObject} from "./state";
import {v1} from "uuid";
import {Dispatch} from "redux";
import {api} from "../components/API/api";

export type PotsType = {
    message: string,
    id: string
}
export type ProfilePageType = {
    posts: PotsType[]
    newPost: string
    profile: ProfileObject
}

const initialState: ProfilePageType = {
    posts: [
        {message: 'bla bla', id: v1()},
        {message: 'Ivan', id: v1()},
        {message: 'Sergei', id: v1()},
    ] as PotsType[],
    newPost: 'it-camasutra',
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
    }
}

export const profilePageReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case 'CHANGE-NEW-POST':
            return {
                ...state,
                newPost: action.newText
            }
        case "ADD-POST":
            return {
                ...state,
                posts: [...state.posts, {message: action.postText, id: v1()}],
                newPost: ""
            }
        case "SET-USER-PROFILE":
            return {
                ...state,
                profile: action.profile
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

export const getUserProfileThunkCreator = (userId: string) => (dispatch: Dispatch) => {
    api.getProfile(userId).then((res) => {
        dispatch(setUserProfile(res.data))
    });
}