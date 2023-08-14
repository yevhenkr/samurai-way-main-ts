import React, {DetailedHTMLProps, LegacyRef, MouseEventHandler, TextareaHTMLAttributes, useState} from 'react';
import s from './MyPosts.module.css'
import PostsItems from './PostsItems/PostsItems';

function MyPosts(props: any) {
    let newPost = React.createRef<HTMLTextAreaElement>()

    function addPost() {
        if (newPost.current) {
            const postValue = newPost.current.value.trim(); // Удаляем лишние пробелы в начале и конце
            if (postValue) {
                props.addPost(postValue);
                newPost.current.value = '';
            }
        }
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