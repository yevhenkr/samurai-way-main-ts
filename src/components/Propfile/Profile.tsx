import React from 'react';
import MyPosts from './MytPosts/MyPosts';
import Profileinfo from './MytPosts/ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';

type ProfilePropsType = {
    addPost: (post: string) => void
    updateNewPostText: (post: string) => void
    profilePage: ProfilePageType
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <Profileinfo/>
            <MyPosts addPost={props.addPost} updateNewPostText={props.updateNewPostText}
                     profilePage={props.profilePage}/>
        </div>
    );
}

export default Profile;