import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profile-page-reducer";
import {messagePageReducer} from "./messages-page-reducer";
import {sideBarReducer} from "./side-bar-reduser";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {appReducer} from "./app-reducer";

let rootReducer = combineReducers({
    profilePage: profilePageReducer,
    messagesPage: messagePageReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppThunkDispatch = ThunkDispatch<AppStateType, any, AnyAction>
// export const useAppDispatch = useDispatch<ThunkType>()
// const useAppDispatch = useDispatch<AppThunkDispatch>();
// Теперь useAppDispatch можно использовать для отправки санок, поддерживаемых redux-thunk

//for vosability
declare global {
    interface Window {
        store: any; // Здесь 'any' может быть заменено на тип вашего хранилища, если он известен
    }
}

// Затем вы можете устанавливать свойство 'store' на объекте 'Window'
window.store = store;