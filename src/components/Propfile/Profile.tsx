import React from 'react';
import Profileinfo from './MytPosts/ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MytPosts/MyPostsContainer";

function Profile() {
    return (
        <div>
            <Profileinfo/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;