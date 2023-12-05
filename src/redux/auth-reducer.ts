import {ActionType} from "./state";
import {Dispatch} from "redux";
import {authAPI} from "../components/API/api";
import {AppThunkDispatch} from "./redux-store";
import {stopSubmit} from "redux-form";

export type AuthType = {
    "id": number,
    "login": string,
    "email": string,
    isAuth: boolean
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
                ...action.payload
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: number, login: string, email: string, isAuth: boolean) => {
    return {type: "SET-USER-DATA" as const, payload: {id, login, email, isAuth}}
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login, true))
                }
            }
        )
}
export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: AppThunkDispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                    dispatch(stopSubmit("login", {_error: message}))
                }
            }
        )
}
export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(0, "", "", false))
                }
            }
        )
}