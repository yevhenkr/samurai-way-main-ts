import React from "react";
import {UsersPropsType} from "./UsersContainer";
import s from "./users.module.css"


export const Users = (props: UsersPropsType) => {
    const followedOnClickHandler = (id: string, isFollowed: boolean) => {
        props.changeFollowed(id, isFollowed)
    }
    const addUsersOnClickHandler = () => {
        props.addUsers()
    }
    let useItems = props.users.map(user =>
        <div className={s.item}>
            <button onClick={() => followedOnClickHandler(user.id, !user.followed)}
                    className={s.followed}>{user.followed ? "Follow" : "Unfollow"}</button>
            <div className={s.aboutUser}>
                <div className={s.aboutUserLeft}>
                    <div className={s.itemName}>{user.fullName}</div>
                    <div>{user.status}</div>
                </div>
                <div>
                    <div className={s.country}>{user.location.country}</div>
                    <div className={s.city}>{user.location.city}</div>
                </div>
            </div>
        </div>)

    return <div className={s.items}>{useItems}
        <button onClick={addUsersOnClickHandler}>{"add users"}</button>
    </div>
}