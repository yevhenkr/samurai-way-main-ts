import React from 'react';
import s from './Profile.module.css';

function Profile() {
    return (
        <div className={s.profile}>
            <div>
                <img src={'https://turist24.com/wp-content/uploads/2020/11/veneciya.jpeg'}/>
            </div>
            <div>
                {/*<img src={'https://turist24.com/wp-content/uploads/2020/11/veneciya.jpeg'}/>*/}
                ava + dicript
            </div>
            <div>My posts
                <div>New post</div>
            </div>
            <div>
                <div>post 1</div>
                <div>post 2</div>
            </div>
        </div>
    );
}

export default Profile;