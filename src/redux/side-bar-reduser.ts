import {ActionType, FriendType, SideBarType} from "./state";
import {v1} from "uuid";


const initialState: SideBarType = {
    friends: [
        {name: 'Andrew', id: v1()},
        {name: 'Sasha', id: v1()},
        {name: 'Sveta', id: v1()},
    ] as FriendType[]
} as SideBarType
export const sideBarReducer = (state: SideBarType = initialState, action: ActionType) => {
    return state
}