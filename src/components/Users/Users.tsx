import React from "react";
import s from "./users.module.css"
import defaultUserIcon from "../../assets/DefaultUserIcon.png";
import {follow, unfollow, UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

type UsersPropsType = {
    pageArray: number[]
    onPageChange: (currenPage: number) => void
    currentPage: number
    users: UserType[]
    followedOnClickHandler: (id: number, isFollowed: boolean) => void
    fallow: (id: number) => void
    unfollow: (id: number) => void
    followingInProgress: number[]
}
export const Users: React.FC<UsersPropsType> = (props) => {
    const dispatch = useDispatch<any>()
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
                    <div>{`id = ${user.id}`}</div>
                    <div>
                        {user.followed
                            ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                dispatch(unfollow(user.id))
                            }}>{'Unfollow'}</button>
                            : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                dispatch(follow(user.id))
                            }}>{'Follow'}</button>
                        }
                    </div>
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
    </div>
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}