import {v1} from 'uuid';
import {addMessage, changeNewMessage, messagePageReducer} from "./messages-page-reducer";
import {addPostAC, changeNewPostAC, profilePageReducer, ProfilePageType, setUserProfile} from "./profile-page-reducer";
import {sideBarReducer} from "./side-bar-reduser";
import {changeFollowed, setCurrentPage, setTotalUserCount, setUsers, toggleIsFetching} from "./users-reducer";
import {setAuthMe} from "./auth-reducer";

type PotsType = {
    message: string,
    id: string
}
// type ProfilePageType = {
//     posts: PotsType[]
//     newPost: string
// }

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
    | ReturnType<typeof changeNewMessage>
    | ReturnType<typeof addMessage>
    | ReturnType<typeof changeFollowed>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUserCount>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthMe>
    ;

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {message: 'bla bla', id: v1()},
                {message: 'Ivan', id: v1()},
                {message: 'Sergei', id: v1()},
            ] as PotsType[],
            newPost: 'it-camasutra',
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
            }
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
        this._state.messagesPage = messagePageReducer(this._state.messagesPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);

        this._callSubscriber()
    },
}