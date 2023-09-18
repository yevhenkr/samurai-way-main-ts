import React from "react";
import {UsersPropsType} from "./UsersContainer";
import s from "./users.module.css"
import defaultUserIcon from "../../assets/DefaultUserIcon.png";
import axios from "axios";


export class UsersC extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${3}&count${10}`).then((res) => {
            this.props.setUsers(res.data.items)
            this.props.setTotalCount(res.data.totalCount)
        });
    }

    followedOnClickHandler = (id: number, isFollowed: boolean) => {
        this.props.changeFollowed(id, isFollowed)
    }

    onPageChange(currenPage: number) {
        this.props.setCurrentPage(currenPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currenPage}&count${10}`).then((res) => {
            this.props.setUsers(res.data.items)
        });
    }

    pageCount: number = Math.ceil(this.props.totalUserCount / this.props.pageSize)
    pageArray: number[] = []

    render() {
        debugger
        this.pageArray = []
        for (let i = 1; i <= this.pageCount; i++) {
            this.pageArray.push(i);
        }
        return <div className={s.items}>
            <div>
                {this.pageArray.map(page => {
                    return <span onClick={(e) => this.onPageChange(page)}
                                 className={page === this.props.currentPage ? s.currentPage : ""}
                    >{page}</span>
                })}
            </div>
            {this.props.users.map(user =>
                <div className={s.item} key={user?.id}>
                    <div>
                        <img className={s.itemImg} src={user?.photos?.small ? user?.photos?.small : defaultUserIcon}
                             alt="Описание изображения"/>
                        <button onClick={() => this.followedOnClickHandler(user?.id, !user?.followed)}
                                className={s.followed}>{user.followed ? "Follow" : "Unfollow"}</button>
                    </div>
                    <div className={s.aboutUser}>
                        <div className={s.aboutUserLeft}>
                            <div className={s.itemName}>{user?.name}</div>
                            <div>{user?.status}</div>
                        </div>
                        <div>
                            <div className={s.country}>{user?.location?.country}</div>
                            <div className={s.city}>{user?.location?.city}</div>
                        </div>
                    </div>
                </div>)}
            {/*<button onClick={this.getUsersFromServerOnClickHandler}>{"addUsers FromServer"}</button>*/}
        </div>
    }
}