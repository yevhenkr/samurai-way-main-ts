import React from 'react';
import s from './Profileinfo.module.scss'
import {ProfilePropsType} from "../../Profile";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

function ProfileInfo(props: ProfilePropsType) {
    return (
        <div>
            <div className={s.allInfo}>
                <div>
                    <ProfileStatusWithHooks isOwner={!!props.isOwner} status={props.status} updateStatus={props.updateStatusThunkCreator}/>
                    {/*<button  onClick={()=>props.putUserProfileThunkCreator({aboutMe:"Eugen", fullName:"1",contacts:{github:"https://github.com/yevhenkr",Github: "", facebook:"",instagram:"https://www.instagram.com/anastasiakrachek",twitter:"",mainLink:"",vk:"", website:"",youtube:""},userId: 29231, lookingForAJob: false, lookingForAJobDescription:"3",photos: {small:"",large:""}})}>setr</button>*/}
                </div>
                <div className={s.aboutUser}>
                 <div className={s.bold}>{"Github : "}<a href={props.profile.contacts.github} className={s.link}>{props.profile.contacts.github}</a>
                 </div>
                 <div className={s.bold}>{"Instagram : "}<a href={props.profile.contacts.instagram}
                    className={s.link}>{props.profile.contacts.instagram}</a></div>
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