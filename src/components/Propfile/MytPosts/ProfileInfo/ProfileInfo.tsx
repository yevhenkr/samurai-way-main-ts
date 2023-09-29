import React from 'react';
import s from './Profileinfo.module.css'
import {ProfilePropsType} from "../../Profile";

function ProfileInfo(props: ProfilePropsType) {
    return (
        <>
            <div>
                <img src={'https://turist24.com/wp-content/uploads/2020/11/veneciya.jpeg'}/>
            </div>
            <div className={s.descriptionBlock}>
                {/*<img src={'https://turist24.com/wp-content/uploads/2020/11/veneciya.jpeg'}/>*/}
                <img src={props.profile.photos.large}/>
                ava + dicript
            </div>
        </>
    );
}

export default ProfileInfo;