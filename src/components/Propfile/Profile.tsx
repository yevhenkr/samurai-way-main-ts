import React from 'react';
import MyPosts from './MytPosts/MyPosts';
import Profileinfo from './MytPosts/ProfileInfo/ProfileInfo';
import {ActionType, ProfilePageType} from '../../redux/state';

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <Profileinfo/>
            <MyPosts dispatch={props.dispatch} profilePage={props.profilePage}/>
        </div>
    );
}

export default Profile;