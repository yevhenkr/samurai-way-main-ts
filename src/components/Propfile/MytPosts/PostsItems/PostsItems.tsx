import React from 'react';
import Post from './../Post/Post';

type PostType = {
    message: string,
    id: number
}

type PropsType = {
    posts: PostType[]
}

function PostsItems(props: PropsType) {
    let postslements = props.posts.map(post => <Post message={post.message}/>)

    return <> {postslements}</>
}

export default PostsItems;