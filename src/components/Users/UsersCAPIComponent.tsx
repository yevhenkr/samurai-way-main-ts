import React from "react";
import {UsersPropsType} from "./UsersContainer";
import {Users} from "./Users";
import Preloader from "../comman/preloader/Preloader";
import {api} from "../API/api";
import {getUsersThunkCreator} from "../../redux/users-reducer";


export class UsersCAPIComponent extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);
        this.onPageChange = this.onPageChange.bind(this);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    followedOnClickHandler = (id: number, isFollowed: boolean) => {
        this.props.changeFollowed(id, isFollowed)
    }
    follow = (id: number) => {
        this.props.changeFollowed(id, true)
    }
    unfollow = (id: number) => {
        this.props.changeFollowed(id, false)
    }

    onPageChange(currenPage: number) {
        this.props.getUsers(currenPage, this.props.pageSize)
        //
        // this.props.setCurrentPage(currenPage)
        // this.props.toggleIsFetching(true)
        // api.getUsers(currenPage, this.props.pageSize).then((data) => {
        //     this.props.setUsers(data.items)
        //     this.props.toggleIsFetching(false)
        // });
    }

    pageCount: number = Math.ceil(this.props.totalUserCount / this.props.pageSize)
    pageArray: number[] = []

    render() {
        this.pageArray = []
        for (let i = 1; i <= this.pageCount; i++) {
            this.pageArray.push(i);
        }
        return <>
            {this.props.isFetching ?
                <Preloader/> : ""
            }
            <Users users={this.props.users} followedOnClickHandler={this.followedOnClickHandler} fallow={this.follow}
                   unfallow={this.unfollow}
                   onPageChange={this.onPageChange} pageArray={this.pageArray}
                   currentPage={this.props.currentPage} followingInProgress={this.props.followingInProgress}
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}/>
        </>
    }
}