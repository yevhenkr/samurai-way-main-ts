import {ActionType, DialogPageType} from "./state";
import {v1} from "uuid";

export const changeNewMessageAC = (newMessage: string) => {
    return {type: "CHANGE-NEW-MESSAGE", newMessage} as const
}
export const addMessageAC = (newMessage: string) => {
    return {type: "ADD-MESSAGE", newMessage, id: v1()} as const
}
export const messagePageReducer = (state: DialogPageType, action: ActionType) => {
    switch (action.type) {
        case 'CHANGE-NEW-MESSAGE':
            return {
                ...state,
                newMessage: action.newMessage
            }
        case "ADD-MESSAGE":
            return {
                ...state,
                messages: [...state.messages, {text: action.newMessage, id: action.id}],
                newMessage: ""
            }
        default:
            return state
    }
}