import {ActionType} from "./state";
import {v1} from "uuid";

export type DialogPageType = {
    dialogs: DialogsType[]
    messages: MessageType[]
}
export type DialogsType = {
    name: string,
    id: string
}
export type MessageType = {
    text: string,
    id: string
}

export const addMessage = (newMessageBody: string) => {
    return {type: "ADD-MESSAGE", id: v1(), newMessageBody} as const
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
}

export const messagePageReducer = (state: DialogPageType = initialState, action: ActionType): DialogPageType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            return {
                ...state,
                messages: [...state.messages, {text: action.newMessageBody, id: action.id}],
                // newMessage: action.newMessageBody
            }
        default:
            return state
    }
}