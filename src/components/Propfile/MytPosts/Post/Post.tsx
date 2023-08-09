import React from 'react';
import s from './Post.module.css';

type PropsType = {
    message: string
}

function Post(props: any) {
    return (<div  className={s.item}>{props.message}</div>);
}

export default Post;