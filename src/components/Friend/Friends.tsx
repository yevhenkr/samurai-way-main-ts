import Navbar from '../Nav/Navbar';
import {FriendType} from '../../redux/state';
import React from 'react';
import s from './Friends.module.css'

type FriendsPropsType = {
    friends: FriendType[]
}

function Friends(props: FriendsPropsType) {
    const friends = props.friends.map((friend: FriendType) => <div key={friend.id}>
        <div className={s.friendsItem}>
            <img className={s.avatar}
                 src={'https://cdn.iconscout.com/icon/free/png-512/free-avatar-372-456324.png?f=avif&w=256'}
                 alt={'logo'}/>
            <span className={s.friendsName}>{friend.name}</span></div>
    </div>)
    return <div className={s.friendsGroup}>
        {friends}
    </div>
}

export default Friends;