import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {profilePageReducer} from "./profile-page-reducer";
import {messagePageReducer} from "./messages-page-reducer";
import {sideBarReducer} from "./side-bar-reduser";
import {usersReducer} from "./users-reducer";
import {RootStateType, StoreType} from "./state";
import {authReducer} from "./auth-reducer";
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'

let rootReducer = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagePageReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));
export type AppDispatch = typeof store.dispatch

//for vosability
declare global {
    interface Window {
        store: any; // Здесь 'any' может быть заменено на тип вашего хранилища, если он известен
    }
}

// Затем вы можете устанавливать свойство 'store' на объекте 'Window'
window.store = store;