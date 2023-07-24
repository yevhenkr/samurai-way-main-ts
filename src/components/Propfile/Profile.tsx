import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MytPosts/MyPosts';
import Profileinfo from './MytPosts/Profileinfo/Profileinfo';

function Profile() {
    return (
        <div>
            <Profileinfo/>
            <MyPosts/>
        </div>
    );
}

export default Profile;