import {combineReducers, createStore, Store} from "redux";
import {profilePageReducer} from "./profile-page-reducer";
import {messagePageReducer} from "./messages-page-reducer";
import {sideBarReducer} from "./side-bar-reduser";
import {StoreType} from "./state";

let rootReducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagePageReducer,
    sideBar: sideBarReducer
})


export const store: Store<StoreType> = createStore(rootReducers);

export type AppStateType = ReturnType<typeof rootReducers>
