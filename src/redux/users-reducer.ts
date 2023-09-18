import {ActionType} from "./state";

export type  UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
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

export const setUsersAC = (users: UserType[]): { type: "SET-USERS"; users: UserType[] } => {
    return {type: "SET-USERS", users} as const
}
export const setCurrentPage = (currentPage: number) => {
    return {type: "SET-CURRENT-PAGE", currentPage} as const
}
export const setTotalUserCount = (count: number) => {
    return {type: "SET-TOTAL-USER-COUNT", count} as const
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
    ] as UserType[],
    pageSize: 10,
    totalUserCount: 101,
    currentPage: 1
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case "CHANGE-FOLLOWED":
            return {
                ...state, users: [...state.users.map(user => user.id === action.id
                    ? {...user, followed: action.isFollowed}
                    : user)]
            }
        case "SET-USERS":
            return {
                ...state, users: action.users
            }
        case "SET-CURRENT-PAGE":
            return {
                ...state, currentPage: action.currentPage
            }
        case "SET-TOTAL-USER-COUNT":
            return {
                ...state, totalUserCount: action.count
            }
        default:
            return state
    }
}