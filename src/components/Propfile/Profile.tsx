import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MytPosts/MyPosts';

function Profile() {
    return (
        <div>
            <div>
                <img src={'https://turist24.com/wp-content/uploads/2020/11/veneciya.jpeg'}/>
            </div>
            <div>
                {/*<img src={'https://turist24.com/wp-content/uploads/2020/11/veneciya.jpeg'}/>*/}
                ava + dicript
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;