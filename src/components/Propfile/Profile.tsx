import React from 'react';
import MyPosts from './MytPosts/MyPosts';
import Profileinfo from './MytPosts/ProfileInfo/ProfileInfo';

function Profile(props: any) {
    return (
        <div>
            <Profileinfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
}

export default Profile;