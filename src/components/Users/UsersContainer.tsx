import React from "react";
import {connect} from "react-redux";
import {UsersCAPIComponent} from "./UsersCAPIComponent";
import {AppStateType} from "../../redux/redux-store";
import {
    changeFollowed, setCurrentPage, setTotalUserCount, setUsers, toggleIsFetching,
    UsersPageType,
    UserType
} from "../../redux/users-reducer";

export type UsersPropsType = {
    changeFollowed: (id: number, isFollowed: boolean) => void,
    users: UserType[]
    setUsers: (users: UserType[]) => void
    setTotalUserCount: (count: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    pageSize: number
    totalUserCount: number
    currentPage: number
    isFetching: boolean
}

const mapStateToPropsType = (state: AppStateType): UsersPageType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

type UsersMapDispatchToPropsType = {
    changeFollowed: (id: number, isFollowed: boolean) => void,
    setUsers: (users: UserType[]) => void
    setTotalUserCount: (count: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export const UsersContainer = connect(mapStateToPropsType,
    {changeFollowed, setUsers, setTotalUserCount, setCurrentPage, toggleIsFetching})(UsersCAPIComponent)