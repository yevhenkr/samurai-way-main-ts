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
import {withAuthRedirect} from "../HOC/withAuthRedirect";

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
    getUsers: (currentPage:number,pageSize:number) => void
}

const mapStateToPropsType = (state: AppStateType): UsersPageType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
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
        getUsers:getUsersThunkCreator
    }),withAuthRedirect)(UsersCAPIComponent)