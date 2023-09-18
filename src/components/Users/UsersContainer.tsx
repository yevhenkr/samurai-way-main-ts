import React from "react";
import {connect} from "react-redux";
import {UsersCAPIComponent} from "./UsersCAPIComponent";
import {AppDispatch, AppStateType} from "../../redux/redux-store";
import {
    changeFollowedAC,
    setCurrentPage, setTotalUserCount,
    setUsersAC,
    UsersPageType,
    UserType
} from "../../redux/users-reducer";

export type UsersPropsType = {
    changeFollowed: (id: number, isFollowed: boolean) => void,
    users: UserType[]
    setUsers: (users: UserType[]) => void
    setTotalCount:(count:number)=>void
    setCurrentPage: (currentPage: number) => void
    pageSize: number
    totalUserCount: number
    currentPage: number

}

const mapStateToPropsType = (state: AppStateType): UsersPageType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    }
}

type UsersMapDispatchToPropsType = {
    changeFollowed: (id: number, isFollowed: boolean) => void,
    setUsers: (users: UserType[]) => void
    setTotalCount:(count:number)=>void
    setCurrentPage: (currentPage: number) => void
}
const mapDispatchToPropsType = (dispatch: AppDispatch): UsersMapDispatchToPropsType => {
    return {
        changeFollowed: (id: number, isFollowed: boolean) => {
            dispatch(changeFollowedAC(id, isFollowed))
        },
        setUsers: (users:UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setTotalCount:(count:number) => {
            dispatch(setTotalUserCount(count))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPage(currentPage))
        }
    }
}

export const UsersContainer = connect(mapStateToPropsType, mapDispatchToPropsType)(UsersCAPIComponent)