import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'

function MyPosts() {
    const posts = [
        {message: 'bla bla', id: '1'},
        {message: 'Ivan', id: '2'},
        {message: 'Sergei', id: '3'},
    ]
    let postslements =posts.map(post =>
        <Post message={post.message}/>
    )
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
            {postslements}
        </>
    );
}

export default MyPosts;