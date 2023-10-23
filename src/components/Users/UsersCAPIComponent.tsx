import React from "react";
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import {Users} from "./Users";
import Preloader from "../comman/preloader/Preloader";


export class UsersCAPIComponent extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);
        this.onPageChange = this.onPageChange.bind(this);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${3}&count${10}`).then((res) => {
            this.props.setUsers(res.data.items)
            this.props.setTotalUserCount(res.data.totalCount)
            this.props.toggleIsFetching(false)
        });
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
        this.props.setCurrentPage(currenPage)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currenPage}&count${10}`).then((res) => {
            this.props.setUsers(res.data.items)
            this.props.toggleIsFetching(false)
        });
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
                   currentPage={this.props.currentPage}/>
        </>
    }
}