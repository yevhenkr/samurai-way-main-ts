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

export type AddPostActionType = {
    type: "ADD-POST"
    post: string
}
type ChangeNewPostActionType = {
    type: "CHANGE_NEW_POST"
    newText: string
}

export type ActionType = AddPostActionType | ChangeNewPostActionType;

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    addPost: (post: string) => void
    _callSubscriber: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionType) => void
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
            ] as MessageType[]
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
            this._state.profilePage.posts.push(<PotsType>{message: action.post, id: v1()})
            this._callSubscriber()
            this.updateNewPostText('')
        } else if (action.type === "CHANGE_NEW_POST") {
            this._state.profilePage.newPost = action.newText
            this._callSubscriber()
        } else {
            console.log("Uncorect actionType ERROR")
        }
    }
}