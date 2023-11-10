import {ActionType} from "./state";
import {Dispatch} from "redux";
import {authAPI} from "../components/API/api";

export type AuthType = {
    "id": number,
    "login": string,
    "email": string,
    isAuth: boolean
}

export const setAuthUserData = (id: number, login: string, email: string) => {
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
export const getAuthUserDataThunkCreator = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            }
        )
}