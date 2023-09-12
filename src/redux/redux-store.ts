import {combineReducers, createStore, Store} from "redux";
import {profilePageReducer} from "./profile-page-reducer";
import {messagePageReducer} from "./messages-page-reducer";
import {sideBarReducer} from "./side-bar-reduser";
import {usersReducer} from "./users-reducer";
import {StoreType} from "./state";

let rootReducer = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagePageReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store: Store<StoreType> = createStore(rootReducer);
export type AppDispatch = typeof store.dispatch