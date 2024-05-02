import React from 'react';
import Profileinfo from './MytPosts/profileInfo/ProfileInfo';
import {MyPostsContainer} from "./MytPosts/MyPostsContainer";
import {ProfileObject} from "../../redux/state";
import {UserPhoto} from "../userPhoto/UserPhoto";
import s from "./MytPosts/profileInfo/Profileinfo.module.scss";

export type ProfilePropsType = {
    profile: ProfileObject
    status: string
    updateStatusThunkCreator: (status: string) => void
}

function Profile(props: ProfilePropsType) {
    let me={avatar: undefined, name: undefined,}

    return (
        <div className={s.layoutWrapper}>
            <UserPhoto
                avatar={me?.avatar}
                // deleteAvatar={deleteAvatar}
                // modeOn={modeOn}
                name={me?.name}
                // onChange={updatePhoto}
            />
            <div>
            <Profileinfo profile={props.profile} status={props.status}
                         updateStatusThunkCreator={props.updateStatusThunkCreator}/>
            <MyPostsContainer/>
            </div>
        </div>
    );
}

export default Profile;