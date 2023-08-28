import {ActionType, ProfilePageType} from "./state";
import {v1} from "uuid";

export const changeNewPostAC = (newText: string) => {
    return {type: "CHANGE-NEW-POST", newText: newText} as const
}
export const addPostAC = (postText: string) => {
    return {type: "ADD-POST", postText: postText} as const
}
export const profilePageReducer = (state: ProfilePageType, action: ActionType) => {
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
        default:
            return state
    }
}