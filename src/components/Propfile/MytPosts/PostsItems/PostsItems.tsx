import React from 'react';
import Post from './../Post/Post';
import {PotsType} from "../../../../redux/profile-page-reducer";

function PostsItems(props: any) {
    let postsElements = props.posts.map((post: PotsType) => <Post key={post.id} message={post.message}/>)
    return <>  {postsElements}</>
}

export default PostsItems;