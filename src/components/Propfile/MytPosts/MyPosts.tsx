import React from 'react';
import s from './MyPosts.module.css'
import PostsItems from './PostsItems/PostsItems';
import {MyPostPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    newPostText: string,
}

let AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component="textarea" name="newPostText" placeholder="Enter your Post"/>
        <button>Add Post</button>
    </form>
}
const AddPostReduxForm = reduxForm<FormDataType>({
    form: "addPostForm"
})(AddPostForm)


function MyPosts(props: MyPostPropsType) {

    const addPostMessage = (formData: FormDataType) => {
        if (formData.newPostText) {
            const postValue = formData.newPostText.trim(); // Удаляем лишние пробелы в начале и конце
            if (postValue) {
                props.addPost(formData.newPostText)
            }
        }
    }
    return (
        <>
            <div className={s.postsBlock}>My posts
                <h3 className={s.posts}>My posts</h3>
                <div>
                    <AddPostReduxForm onSubmit={addPostMessage}/>
                </div>
            </div>
            <PostsItems posts={props.posts}/>
        </>
    );
}

export default MyPosts;