import {v1} from 'uuid';
import {addMessage} from "./messages-page-reducer";
import {
    addPostAC,
    changeNewPostAC,
    profilePageReducer,
    ProfilePageType,
    setStatus,
    setUserProfile
} from "./profile-page-reducer";
import {sideBarReducer} from "./side-bar-reduser";
import {
    followSuccess,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    toggleIsFetching,
    toggleIsFollowingProgress,
    unfollowSuccess
} from "./users-reducer";
import {setAuthUserData} from "./auth-reducer";
import {initializedSuccess} from "./app-reducer";

type PotsType = {
    message: string,
    id: string
}

type DialogsType = {
    name: string,
    id: string
}
type MessageType = {
    text: string,
    id: string
}
type DialogPageType = {
    dialogs: DialogsType[]
    messages: MessageType[]
    newMessage: string
}

export type FriendType = {
    name: string,
    id: string
}

export type SideBarType = {
    friends: FriendType[]
}

export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: DialogPageType
    sideBar: SideBarType
}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: () => void
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionType) => void
}
export type ProfileObject = {
    aboutMe: string;
    contacts: ProfileObjectContacts;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: ProfileObjectPhotos;
}
export type ProfileObjectContacts = {
    facebook: string;
    website?: any;
    vk: string;
    twitter: string;
    instagram: string;
    youtube?: any;
    github: string;
    mainLink?: any;
}
export type ProfileObjectPhotos = {
    small: string;
    large: string;
}
export type ActionType =
    ReturnType<typeof changeNewPostAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof addMessage>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUserCount>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleIsFollowingProgress>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof initializedSuccess>

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {message: 'bla bla', id: v1()},
                {message: 'Ivan', id: v1()},
                {message: 'Sergei', id: v1()},
            ] as PotsType[],
            profile: {
                aboutMe: '',
                contacts: {
                    facebook: '',
                    vk: '',
                    twitter: '',
                    instagram: '',
                    github: '',
                },
                lookingForAJob: false,
                lookingForAJobDescription: '',
                fullName: '',
                userId: 0,
                photos: {
                    small: '',
                    large: '',
                },
            },
            status: ""
        },
        messagesPage: {
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
        },

        sideBar: {
            friends: [
                {name: 'Andrew', id: v1()},
                {name: 'Sasha', id: v1()},
                {name: 'Sveta', id: v1()},
            ] as FriendType[]
        } as SideBarType
    },
    _callSubscriber() {
        console.log('state changed');
    },

    subscribe(callback) {
        this._callSubscriber = callback
    },
    getState() {
        return this._state
    },
    dispatch(action: ActionType) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);

        this._callSubscriber()
    },
}