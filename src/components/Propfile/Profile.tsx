import React from 'react';
import Profileinfo from './MytPosts/ProfileInfo/ProfileInfo';
import {MyPostsContainer} from "./MytPosts/MyPostsContainer";
import {ProfileObject} from "../../redux/state";

export type ProfilePropsType = {
    profile: ProfileObject
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <Profileinfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;