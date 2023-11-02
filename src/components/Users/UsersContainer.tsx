import React from "react";
import {connect} from "react-redux";
import {UsersCAPIComponent} from "./UsersCAPIComponent";
import {AppStateType} from "../../redux/redux-store";
import {
    changeFollowed,
    getUsersThunkCreator,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    toggleIsFollowingProgress,
    UsersPageType,
    UserType
} from "../../redux/users-reducer";

export type UsersPropsType = {
    changeFollowed: (id: number, isFollowed: boolean) => void,
    users: UserType[]
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
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

export const UsersContainer = connect(mapStateToPropsType,
    {
        changeFollowed,setUsers,
        setCurrentPage, toggleIsFollowingProgress,
        getUsers:getUsersThunkCreator
    })(UsersCAPIComponent)