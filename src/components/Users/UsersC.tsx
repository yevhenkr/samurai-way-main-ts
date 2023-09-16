import React from "react";
import {UsersPropsType} from "./UsersContainer";
import s from "./users.module.css"
import {usersAPI} from "../API/users-api";
import defaultUserIcon from "../../assets/DefaultUserIcon.png";
import {UserType} from "../../redux/users-reducer";

interface UsersState {
    users: UserType[];
}

export class UsersC extends React.Component<UsersPropsType> {
    state: UsersState = {
        users: [], // Храним полученных пользователей в состоянии
    };
    followedOnClickHandler = (id: number, isFollowed: boolean) => {
        this.props.changeFollowed(id, isFollowed)
    }

    componentDidMount() {
        usersAPI.getUsers().then((res) => {
            // console.log({users: [res.data.items]})
            console.log(res.data.items)
            debugger
            this.setState({users: res.data.items});
        });
    }

    render() {
        return <div className={s.items}>
            {this.state.users.map(user =>
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