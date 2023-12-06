import {ActionType} from "./state";
import {Dispatch} from "redux";
import {api} from "../components/API/api";

export type  UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
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
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case "UNFOLLOW":
            return {
                ...state, users: [...state.users.map(user => user.id === action.id
                    ? {...user, followed: false}
                    : user)]
            }
        case "FOLLOW":
            return {
                ...state, users: [...state.users.map(user => user.id === action.id
                    ? {...user, followed: true}
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
        case "TOGGLE-IS-FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }
        case "TOGGLE-IS-FOLLOWING-PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id !== action.userId)]
            }
        default:
            return state
    }
}
export const followSuccess = (id: number) => {
    return {type: "FOLLOW", id} as const
}
export const unfollowSuccess = (id: number) => {
    return {type: "UNFOLLOW", id} as const
}
export const setUsers = (users: UserType[]): { type: "SET-USERS"; users: UserType[] } => {
    return {type: "SET-USERS", users} as const
}
export const setCurrentPage = (currentPage: number) => {
    return {type: "SET-CURRENT-PAGE", currentPage} as const
}
export const setTotalUserCount = (count: number) => {
    return {type: "SET-TOTAL-USER-COUNT", count} as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {type: "TOGGLE-IS-FETCHING", isFetching} as const
}
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => {
    return {type: "TOGGLE-IS-FOLLOWING-PROGRESS", isFetching, userId} as const
}

export const getUsersThunkCreator = (page: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))

        api.getUsers(page, pageSize).then((data) => {
            dispatch(setUsers(data.items))
            dispatch(setTotalUserCount(data.totalCount))
            dispatch(toggleIsFetching(false))
        });
    }
}
export const unfollow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        api.unFollowed(userId).then((data) => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
                dispatch(toggleIsFollowingProgress(false, userId))
            }
        })
    }
}
export const follow = (userId: number) => {

    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        api.followed(userId).then((data) => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId))
                dispatch(toggleIsFollowingProgress(false, userId))
            }
        })
    }
}