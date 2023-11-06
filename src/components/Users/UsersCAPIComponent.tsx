import React from "react";
import {UsersPropsType} from "./UsersContainer";
import {Users} from "./Users";
import Preloader from "../comman/preloader/Preloader";

export class UsersCAPIComponent extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);
        this.onPageChange = this.onPageChange.bind(this);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    followedOnClickHandler = (id: number, isFollowed: boolean) => {
        this.props.follow(id)
    }
    follow = (id: number) => {
        this.props.follow(id)
    }
    unfollow = (id: number) => {
        this.props.unfollow(id)
    }
    onPageChange(currenPage: number) {
        this.props.getUsers(currenPage, this.props.pageSize)
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
                   unfollow={this.unfollow}
                   onPageChange={this.onPageChange} pageArray={this.pageArray}
                   currentPage={this.props.currentPage} followingInProgress={this.props.followingInProgress}/>
        </>
    }
}