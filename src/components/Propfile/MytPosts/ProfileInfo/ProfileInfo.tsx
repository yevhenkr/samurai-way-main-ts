import React from 'react';
import s from './Profileinfo.module.css'
import {ProfilePropsType} from "../../Profile";
import Preloader from "../../../comman/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

function ProfileInfo(props: ProfilePropsType) {
    return (
        <>
            <div>
                <img src={'https://turist24.com/wp-content/uploads/2020/11/veneciya.jpeg'}/>
                <ProfileStatus workStatus={props.profile.lookingForAJobDescription}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div>{"Github : " + props.profile.contacts.github}</div>
                <div>{"Twitter : " + props.profile.contacts.twitter}</div>
                <div>{"Instagram : " + props.profile.contacts.instagram}</div>
                <div>{"Worck : " + props.profile.lookingForAJobDescription}</div>
                <div>{"fullName : " + props.profile.fullName}</div>
                ava + dicript
            </div>
        </>
    );
}

export default ProfileInfo;