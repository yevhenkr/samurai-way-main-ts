import React from 'react';
import Profileinfo from './MytPosts/profileInfo/ProfileInfo';
import {MyPostsContainer} from "./MytPosts/MyPostsContainer";
import {ProfileObject} from "../../redux/state";

export type ProfilePropsType = {
    profile: ProfileObject
    status: string
    updateStatusThunkCreator: (status: string) => void
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <Profileinfo profile={props.profile} status={props.status}
                         updateStatusThunkCreator={props.updateStatusThunkCreator}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;