import {ActionType} from "./state";

export type UsersPageType = {
    users: UserType[]
}
type LocationType = {
    country: string,
    city: string
}
type PhotoType = {
    small: string
}
export type UserType = {
    id: number,
    name: string,
    followed: boolean,
    status: string,
    location: LocationType
    photos: PhotoType
}

export const changeFollowedAC = (id: number, isFollowed: boolean) => {
    return {type: "CHANGE-FOLLOWED", id, isFollowed} as const
}


export const addUsersAC = (): { type: "ADD-USERS" } => {
    return {type: "ADD-USERS"}
}

const initialState: UsersPageType = {
    users: [
        {
            id: 345,
            name: "Eugen",
            followed: true,
            location: {city: "Zaporozhye", country: "Ukraine"},
            status: "Im love volleyball"
        },
        {
            id: 565,
            name: "Ivan",
            followed: false,
            location: {city: "Dnipro", country: "Ukraine"},
            status: "Im love bascetboll"
        },
        {
            id: 34564,
            name: "Sergiy",
            followed: true,
            location: {city: "Vrotslav", country: "Poland"},
            status: "Im love syatcuvka"
        },
    ] as UserType[]
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case "CHANGE-FOLLOWED":
            return {
                ...state, users: [...state.users.map(user => user.id === action.id
                    ? {...user, followed: action.isFollowed}
                    : user)]
            }
        case "ADD-USERS":
            return {
                ...state,
                users: [...state.users, {
                    id: 345435,
                    name: "Eugen",
                    followed: true,
                    location: {city: "Zaporozhye", country: "Ukraine"},
                    status: "Im love volleyball",
                    photos: {small: ""}
                }]
            }
        default:
            return state
    }
}