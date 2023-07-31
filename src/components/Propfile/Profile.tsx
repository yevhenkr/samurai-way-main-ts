import React from 'react';
import MyPosts from './MytPosts/MyPosts';
import Profileinfo from './MytPosts/Profileinfo/Profileinfo';

function Profile() {
    const posts = [
        {message: 'bla bla', id: '1'},
        {message: 'Ivan', id: '2'},
        {message: 'Sergei', id: '3'},
    ]
    return (
        <div>
            <Profileinfo/>
            <MyPosts posts={posts}/>
        </div>
    );
}

export default Profile;