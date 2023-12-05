import {ActionType} from "./state";
import {AppThunkDispatch} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

export type AppType = {
    initialized: boolean
}

const initialState: AppType = {
    initialized: false,
}

export const appReducer = (state: AppType = initialState, action: ActionType): AppType => {
    switch (action.type) {
        case 'INITIALIZED-SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => {
    return {type: "INITIALIZED-SUCCESS" as const}
}

export const initializeApp = () => async (dispatch: AppThunkDispatch) => {
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}