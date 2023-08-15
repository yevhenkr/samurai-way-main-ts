import {v1} from 'uuid';

export type PotsType = {
    message: string,
    id: string
}
export type ProfilePageType = {
    posts: PotsType[]
    newPost: string
}

export type DialogsType = {
    name: string,
    id: string
}
export type MessageType = {
    text: string,
    id: string
}
export type DialogPageType = {
    dialogs: DialogsType[]
    messages: MessageType[]
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

export const state: RootStateType = {
    profilePage: {
        posts: [
            {message: 'bla bla', id: v1()},
            {message: 'Ivan', id: v1()},
            {message: 'Sergei', id: v1()},
        ] as PotsType[],
        newPost: 'it-camasutra'
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
        ] as MessageType[]
    },

    sideBar: {
        friends: [
            {name: 'Andrew', id: v1()},
            {name: 'Sasha', id: v1()},
            {name: 'Sveta', id: v1()},
        ] as FriendType[]
    } as SideBarType
}
let rerenderEntireTree = (state: RootStateType, addPost: (post: string) => void, updateNewPostText: (newText: string) => void) => {
    console.log('state changed');
}

export const addPost = (post: string) => {
    state.profilePage.posts.push(<PotsType>{message: post, id: v1()})
    rerenderEntireTree(state, addPost, updateNewPostText)
    updateNewPostText('')
}
export const updateNewPostText = (newText: string) => {
    state.profilePage.newPost = newText
    rerenderEntireTree(state, addPost, updateNewPostText)
}

export const subscribe = (observer: any) => {
    rerenderEntireTree = observer
}