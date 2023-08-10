import React, {DetailedHTMLProps, LegacyRef, MouseEventHandler, TextareaHTMLAttributes} from 'react';
import s from './MyPosts.module.css'
import PostsItems from './PostsItems/PostsItems';

function MyPosts(props: any) {
    let newPost = React.createRef<HTMLTextAreaElement>()

    function addPost() {
        alert(newPost.current?.value)
    }

    return (
        <>
            <div className={s.postsBlock}>My posts
                <h3 className={s.posts}>My posts</h3>
                <div>
                    <textarea ref={newPost}></textarea>
                    <div>
                        <button onClick={addPost}>Add Post</button>
                    </div>
                </div>
            </div>
            <PostsItems posts={props.posts}/>
        </>
    );
}

export default MyPosts;