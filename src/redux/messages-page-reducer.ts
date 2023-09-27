import {ActionType} from "./state";
import {v1} from "uuid";

export type DialogPageType = {
    dialogs: DialogsType[]
    messages: MessageType[]
    newMessage: string
}
export type DialogsType = {
    name: string,
    id: string
}
export type MessageType = {
    text: string,
    id: string
}

export const changeNewMessage = (newMessage: string) => {
    return {type: "CHANGE-NEW-MESSAGE", newMessage} as const
}
export const addMessage = () => {
    return {type: "ADD-MESSAGE", id: v1()} as const
}

const initialState: DialogPageType = {
    dialogs: [
        {name: 'Dimych', id: v1()},
        {name: 'Ivan', id: v1()},
        {name: 'Sergei', id: v1()},
        {name: 'Andrey', id: v1()},
        {name: 'Oleg', id: v1()}
    ] as DialogsType[],
    messages: [
        {text: '- Hi', id: v1()},
        {text: '- How are you itika', id: v1()},
        {text: '- You', id: v1()}
    ] as MessageType[],
    newMessage: ""
}

export const messagePageReducer = (state: DialogPageType = initialState, action: ActionType): DialogPageType => {
    switch (action.type) {
        case 'CHANGE-NEW-MESSAGE':
            return {
                ...state,
                newMessage: action.newMessage
            }
        case "ADD-MESSAGE":
            return {
                ...state,
                messages: [...state.messages, {text: state.newMessage, id: action.id}],
                newMessage: ""
            }
        default:
            return state
    }
}