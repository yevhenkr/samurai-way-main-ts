import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppDispatch, AppStateType} from "../../redux/redux-store";
import {addUsersAC, changeFollowedAC, UsersPageType, UserType} from "../../redux/users-reducer";

export type UsersPropsType = {
    users: UserType[]
    changeFollowed: (id: string, isFollowed: boolean) => void,
    addUsers: () => void
}

const mapStateToPropsType = (state: AppStateType): UsersPageType => {
    return {
        users: state.usersPage.users
    }
}

type UsersMapDispatchToPropsType = {
    changeFollowed: (id: string, isFollowed: boolean) => void,
    addUsers: () => void
}
const mapDispatchToPropsType = (dispatch: AppDispatch): UsersMapDispatchToPropsType => {
    return {
        changeFollowed: (id: string, isFollowed: boolean) => {
            dispatch(changeFollowedAC(id, isFollowed))
        },
        addUsers: () => {
            dispatch(addUsersAC())
        }
    }
}

export const UsersContainer = connect(mapStateToPropsType, mapDispatchToPropsType)(Users)