import React from 'react';
import s from './Profileinfo.module.scss'
import {ProfilePropsType} from "../../Profile";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {UserPhoto} from "../../../userPhoto/UserPhoto";

function ProfileInfo(props: ProfilePropsType) {
    return (
        <div>
            <div className={s.allInfo}>
                {/*<img src={props.profile.photos.large} alt={"no img"}/>*/}
                <div>
                    {/*<img src={'https://turist24.com/wp-content/uploads/2020/11/veneciya.jpeg'} alt={"no img"}/>*/}
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatusThunkCreator}/>
                </div>
                <div className={s.aboutUser}>
                <div className={s.bold}>{"Github : "}<span className={s.lighter}>{props.profile.contacts.github}</span>
                </div>
                <div className={s.bold}>{"Twitter : "}<span
                    className={s.lighter}>{props.profile.contacts.twitter}</span></div>
                <div className={s.bold}>{"Instagram : "}<span
                    className={s.lighter}>{props.profile.contacts.instagram}</span></div>
                <div className={s.bold}>{"Worck : "}<span
                    className={s.lighter}>{props.profile.lookingForAJobDescription}</span></div>
                <div className={s.bold}>{"fullName : "}<span
                    className={s.lighter}>{props.profile.fullName}</span></div>
                ava + dicript
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;