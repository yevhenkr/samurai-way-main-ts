import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import PostsItems from './PostsItems/PostsItems';
import {PotsType} from '../../../redux/state';

type MyPostPropsType = {
    addPost: (newPost: string) => void
    onChangeTextarea: (e: string) => void
    newPost: string
    posts: PotsType[]
}

function MyPosts(props: MyPostPropsType) {
    let newPost = React.createRef<HTMLTextAreaElement>()

    function addPost() {
        if (newPost.current) {
            const postValue = newPost.current.value.trim(); // Удаляем лишние пробелы в начале и конце
            if (postValue) {
                props.addPost(postValue)
            }
        }
    }

    const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeTextarea(e.currentTarget.value)
    }
    return (
        <>
            <div className={s.postsBlock}>My posts
                <h3 className={s.posts}>My posts</h3>
                <div>
                    <textarea onChange={onChangeTextarea} ref={newPost} value={props.newPost}></textarea>
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