import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'

function MyPosts() {
    return (
        <>
            <div className={s.postsBlock}>My posts
                <h3 className={s.posts}>My posts</h3>
                <div>
                    <textarea></textarea>
                    <div>
                        <button>Add Post</button>
                    </div>
                </div>
            </div>
            <Post message={'bla bla'}/>
            <Post message={'bla bla bla bla'}/>
            <Post message={'blablablabla'}/>
        </>
    );
}

export default MyPosts;