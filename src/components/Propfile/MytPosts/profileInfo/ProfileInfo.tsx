import React from 'react';
import s from './Profileinfo.module.scss'
import {ProfilePropsType} from "../../Profile";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

function ProfileInfo(props: ProfilePropsType) {
    return (
            <div className={s.allInfo}>
                    <ProfileStatusWithHooks isOwner={!!props.isOwner} status={props.status} updateStatus={props.updateStatusThunkCreator}/>
                    <button  onClick={()=>props.putUserProfileThunkCreator({aboutMe:"Eugen", fullName:"Vasilenko",contacts:{github:props.profile.contacts.github, facebook:"https://www.facebook.com",instagram:props.profile.contacts.instagram,twitter:"",mainLink:"",vk:"", website:"",youtube:props.profile.contacts.youtube},userId: 29231, lookingForAJob: true, lookingForAJobDescription:props.profile.lookingForAJobDescription,photos: {small:props.profile.photos.small, large:props.profile.photos.large}})}>setr</button>
                <div className={s.aboutUser}>
                    <div className={s.bold}>{"fullName : "}
                     <span className={s.lighter}>{props.profile.fullName}</span>
                    </div>
                    <div className={s.bold}>{"Github : "}
                     <a href={props.profile.contacts.github} className={s.link}>{props.profile.contacts.github}</a>
                    </div>
                    <div className={s.bold}>{"Instagram : "}
                        <a href={props.profile.contacts.instagram} className={s.link}>{props.profile.contacts.instagram}
                        </a>
                    </div>
                    <div className={s.bold}>{"Facebook : "}
                        <a href={props.profile.contacts.facebook}
                    className={s.link}>{props.profile.contacts.facebook}</a></div>
                    <div className={s.bold}>{"Youtube : "}
                        <a href={props.profile.contacts.youtube}
                    className={s.link}>{props.profile.contacts.youtube}</a></div>
                 <div className={`${s.bold}`}>Worck:
                     <div className={s.workWrapper}>
                         <span className={`${s.lighter} ${s.displayFlex}`}>
                             {"Looking for a job: " + `${props.profile.lookingForAJob ? "yes" : "no"}`}
                         </span>
                         <span className={s.lighter}>
                             {"Job description: " +`${props.profile.lookingForAJobDescription}`}
                         </span>
                     </div>
                 </div>
                </div>
            </div>
    );
}

export default ProfileInfo;