import React, {ChangeEvent} from 'react';
import Profileinfo from './MytPosts/profileInfo/ProfileInfo';
import {MyPostsContainer} from "./MytPosts/MyPostsContainer";
import {ProfileObject} from "../../redux/state";
import s from "./MytPosts/profileInfo/Profileinfo.module.scss";
import {UserPhoto} from "../../feature/profile/ui/personalInformation/userPhoto/UserPhoto";

export type ProfilePropsType = {
    avatar?: string
    profile: ProfileObject
    status: string
    updateStatusThunkCreator: (status: string) => void
    putUserProfileThunkCreator: (data: ProfileObject)=> any
    updatePhotoThunkCreator?: (data: any)=> void
}

function Profile(props: ProfilePropsType) {
    let me={name: undefined}
    const updatePhoto = async (event: ChangeEvent<HTMLInputElement>) => {
        try {
            if (event.target.files) {
                if(props.updatePhotoThunkCreator){
                props.updatePhotoThunkCreator(event)
                }
                // await setEditProfile(formData).then(() => toast.success('Photo changed successfully.'))
            }
        } catch (error) {
            // toast.error('Error when changing the photo:' + JSON.stringify(error))
        }
    }

    return (
        <div className={s.layoutWrapper}>
            <UserPhoto avatar={props.avatar} name={me?.name} modeOn={false} deleteAvatar={()=>{}}  onChange={updatePhoto}/>
            <div>
                <Profileinfo profile={props.profile} status={props.status}
                             updateStatusThunkCreator={props.updateStatusThunkCreator} putUserProfileThunkCreator={props.putUserProfileThunkCreator} />
                <MyPostsContainer/>
            </div>
        </div>
    );
}

export default Profile;