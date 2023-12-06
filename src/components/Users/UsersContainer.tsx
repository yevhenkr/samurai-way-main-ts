import {connect} from "react-redux";
import {UsersCAPIComponent} from "./UsersCAPIComponent";
import {AppStateType} from "../../redux/redux-store";
import {
    followSuccess,
    getUsersThunkCreator,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    toggleIsFetching,
    toggleIsFollowingProgress, unfollowSuccess,
    UsersPageType,
    UserType,
} from "../../redux/users-reducer";
import {compose} from "redux";
import {FC} from "react";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount, getUsers
} from "../../redux/users-selectors";

export type UsersPropsType = {
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    users: UserType[]
    setUsers: (users: UserType[]) => void
    setTotalUserCount: (count: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    getUsers: (currentPage: number, pageSize: number) => void
}

const mapStateToPropsType = (state: AppStateType): UsersPageType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export const UsersContainer = compose<FC>(connect(mapStateToPropsType,
    {
        follow: followSuccess,
        unfollow: unfollowSuccess,
        setUsers,
        setTotalUserCount,
        setCurrentPage,
        toggleIsFollowingProgress,
        toggleIsFetching,
        getUsers: getUsersThunkCreator
    }))(UsersCAPIComponent)