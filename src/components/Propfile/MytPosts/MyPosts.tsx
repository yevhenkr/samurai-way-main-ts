import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return (
        <>
            <div>My posts
                <div>
                    <textarea></textarea>
                    <div>
                        <button>Add Post</button>
                    </div>
                </div>
            </div>
            <Post/>
            <Post/>
            <Post/>
        </>
    );
}

export default MyPosts;