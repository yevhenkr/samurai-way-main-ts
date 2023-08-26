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
    addPost: (post: string) => void
    _callSubscriber: () => void
    updateNewPostText: (newText: string) => void
    updateNewMessage: () => void
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionType) => void
}
export type ActionType =
    ReturnType<typeof changeNewPostAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewMessageAC>
    | ReturnType<typeof addMessageAC>;

export const changeNewPostAC = (newText: string) => {
    return {type: "CHANGE-NEW-POST", newText: newText} as const
}
export const addPostAC = (postText: string) => {
    return {type: "ADD-POST", postText: postText} as const
}

export const changeNewMessageAC = (newMessage: string) => {
    return {type: "CHANGE-NEW-MESSAGE", newMessage} as const
}
export const addMessageAC = (newMessage: string) => {
    return {type: "ADD-MESSAGE", newMessage} as const
}

export let store: StoreType = {
    _state: {
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
    addPost(post: string) {
        this._state.profilePage.posts.push(<PotsType>{message: post, id: v1()})
        this._callSubscriber()
        this.updateNewPostText('')
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPost = newText
        this._callSubscriber()
    },
    updateNewMessage() {
        this._state.messagesPage.newMessage = ""
        this._callSubscriber()
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
        if (action.type === "ADD-POST") {
            this._state.profilePage.posts.push(<PotsType>{message: action.postText, id: v1()})
            this._callSubscriber()
            this.updateNewPostText('')
        } else if (action.type === "CHANGE-NEW-POST") {
            this._state.profilePage.newPost = action.newText
            this._callSubscriber()
        } else if (action.type === "CHANGE-NEW-MESSAGE") {
            this._state.messagesPage.newMessage = action.newMessage
            this._callSubscriber()
        } else if (action.type === "ADD-MESSAGE") {
            this._state.messagesPage.messages.push(<MessageType>{text: action.newMessage, id: v1()})
            this._callSubscriber()
            this.updateNewMessage()
        } else {
            console.log("Uncorect actionType ERROR")
        }
    }
}