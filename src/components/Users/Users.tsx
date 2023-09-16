import React, {useState} from "react";
import {UsersPropsType} from "./UsersContainer";
import s from "./users.module.css"
import {GetUsers, usersAPI} from "../API/users-api";
import defaultUserIcon from "../../assets/DefaultUserIcon.png";


export const Users = (props: UsersPropsType) => {
    const [users, setUsers] = useState<GetUsers[]>([])

    const followedOnClickHandler = (id: number, isFollowed: boolean) => {
        props.changeFollowed(id, isFollowed)
    }
    const addUsersOnClickHandler = () => {
        props.addUsers()
    }
    const getUsersFromServerOnClickHandler = () => {
        usersAPI.getUsers()
            .then((res) => {
                setUsers(res.data.items)
            })
    }
    let useItems = users.map(user =>
        <div className={s.item}>
            <div>
                <img className={s.itemImg} src={user.photo.small ? user.photo.small : defaultUserIcon}
                     alt="Описание изображения"/>
                <button onClick={() => followedOnClickHandler(user.id, !user.followed)}
                        className={s.followed}>{user.followed ? "Follow" : "Unfollow"}</button>
            </div>
            <div className={s.aboutUser}>
                <div className={s.aboutUserLeft}>
                    <div className={s.itemName}>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div>
                    <div className={s.country}>{"user.location.country"}</div>
                    <div className={s.city}>{"user.location.city"}</div>
                </div>
            </div>
        </div>)

    return <div className={s.items}>{useItems}
        <button onClick={addUsersOnClickHandler}>{"add users"}</button>
        <button onClick={getUsersFromServerOnClickHandler}>{"addUsers FromServer"}</button>
    </div>
}