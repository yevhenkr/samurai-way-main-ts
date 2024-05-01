import React from 'react';
import s from './Post.module.scss';

function Post(props: any) {
    return (<div  className={s.item}>{props.message}</div>);
}

export default Post;