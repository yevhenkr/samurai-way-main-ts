import React from 'react';
import Post from './../Post/Post';
import {PotsType} from '../../../../index';

function PostsItems(props: any) {
    let postslements = props.posts.map((post: PotsType) => <Post key={post.id} props={post}/>)

    return <>  {postslements}</>
}

export default PostsItems;