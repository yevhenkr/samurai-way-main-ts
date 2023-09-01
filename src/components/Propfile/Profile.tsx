import React from 'react';
import Profileinfo from './MytPosts/ProfileInfo/ProfileInfo';
import {ActionType, ProfilePageType, StoreType} from '../../redux/state';
import MyPostsContainer from "./MytPosts/MyPostsContainer";

type ProfilePropsType = {
    store: StoreType
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <Profileinfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;