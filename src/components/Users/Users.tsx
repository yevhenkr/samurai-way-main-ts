import React from "react";
import s from "./users.module.css"
import defaultUserIcon from "../../assets/DefaultUserIcon.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    pageArray: number[]
    onPageChange: (currenPage: number) => void
    currentPage: number
    users: UserType[]
    followedOnClickHandler: (id: number, isFollowed: boolean) => void
}
export const Users: React.FC<UsersPropsType> = (props) => {

    return <div className={s.items}>
        <div>
            {props.pageArray.map(page => {
                return <span onClick={(e) => props.onPageChange(page)}
                             className={page === props.currentPage ? s.currentPage : ""}
                >{page}</span>
            })}
        </div>
        {props.users.map(user =>
            <div className={s.item} key={user?.id}>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img className={s.itemImg} src={user?.photos?.small ? user?.photos?.small : defaultUserIcon}
                             alt="Описание изображения"/>
                    </NavLink>
                    <button onClick={() => props.followedOnClickHandler(user?.id, !user?.followed)}
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