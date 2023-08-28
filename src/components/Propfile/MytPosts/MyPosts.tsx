import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import PostsItems from './PostsItems/PostsItems';
import {ActionType, ProfilePageType} from '../../../redux/state';
import {addPostAC, changeNewPostAC} from "../../../redux/profile-page-reducer";

type MyPostPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}

function MyPosts(props: MyPostPropsType) {
    let newPost = React.createRef<HTMLTextAreaElement>()
    function addPost() {
        if (newPost.current) {
            const postValue = newPost.current.value.trim(); // Удаляем лишние пробелы в начале и конце
            if (postValue) {
                props.dispatch(addPostAC(postValue))
            }
        }
    }

    const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewPostAC(e.currentTarget.value))
    }
    return (
        <>
            <div className={s.postsBlock}>My posts
                <h3 className={s.posts}>My posts</h3>
                <div>
                    <textarea onChange={onChangeTextarea} ref={newPost} value={props.profilePage.newPost}></textarea>
                    <div>
                        <button onClick={addPost}>Add Post</button>
                    </div>
                </div>
            </div>
            <PostsItems posts={props.profilePage.posts}/>
        </>
    );
}

export default MyPosts;