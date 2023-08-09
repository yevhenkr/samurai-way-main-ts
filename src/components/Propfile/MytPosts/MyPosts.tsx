import React from 'react';
import s from './MyPosts.module.css'
import PostsItems from './PostsItems/PostsItems';

function MyPosts(props: any) {

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
            <PostsItems posts={props.posts}/>
        </>
    );
}

export default MyPosts;