import React from 'react';
import Profileinfo from './MytPosts/profileInfo/ProfileInfo';
import {MyPostsContainer} from "./MytPosts/MyPostsContainer";
import {ProfileObject} from "../../redux/state";
import s from "./MytPosts/profileInfo/Profileinfo.module.scss";
import {UserPhoto} from "../../feature/profile/ui/personalInformation/userPhoto/UserPhoto";

export type ProfilePropsType = {
    profile: ProfileObject
    status: string
    updateStatusThunkCreator: (status: string) => void
    putUserProfileThunkCreator: (data: ProfileObject)=> any
}

function Profile(props: ProfilePropsType) {
    let me={avatar: undefined, name: undefined,}

    return (
        <div className={s.layoutWrapper}>
            <UserPhoto avatar={me?.avatar} name={me?.name} modeOn={false} deleteAvatar={()=>{}}/>
            <div>
            <Profileinfo profile={props.profile} status={props.status}
                         updateStatusThunkCreator={props.updateStatusThunkCreator} putUserProfileThunkCreator={props.putUserProfileThunkCreator}/>
            <MyPostsContainer/>
            </div>
        </div>
    );
}

export default Profile;