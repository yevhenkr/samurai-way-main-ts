import React from 'react';
import Post from './Post/Post';

function MyPosts() {
    return (
        <>
            <div>My posts
                <div>
                    <textarea></textarea>
                    <div>
                        <button>Add Post</button>
                    </div>
                </div>
            </div>
            <Post message={'bla bla'}/>
            <Post message={'bla bla bla bla'}/>
            <Post message={'blablablabla'}/>
        </>
    );
}

export default MyPosts;