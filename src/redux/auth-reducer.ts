import {ActionType} from "./state";

export type AuthType = {
    "id": number,
    "login": string,
    "email": string,
    isAuth: boolean
}

export const setAuthMe = (id: number, login: string, email: string) => {
    return {type: "SET-USER-DATA" as const, data: {id, login, email}}
}

const initialState: AuthType = {
    id: 0,
    login: "-",
    email: "-",
    isAuth: false
}

export const authReducer = (state: AuthType = initialState, action: ActionType): AuthType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data, isAuth: true
            }
        default:
            return state
    }
}