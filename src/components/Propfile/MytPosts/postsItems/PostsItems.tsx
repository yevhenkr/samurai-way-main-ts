import React from 'react';
import {PotsType} from "../../../../redux/profile-page-reducer";
import s from "./PostsItems.module.scss";
import {LikeIcon} from "../../../../assets/icons/likeIcon";
type PostsItemsType = {
    posts: PotsType[]
    img: string
    fullName: string
    name: string
}

function PostsItems(props: PostsItemsType) {
    let postsElements = props.posts.map((post: PotsType) => <div className={s.userPostWrapper}>
        <div>
            <div>
                <div className={s.userData}>
                    <div><img className={s.userAvatar}
                        src={props.img}
                        alt=""/></div>
                    <div className={s.nameWrapper}>
                        <span>{`${props.fullName} ${props.name}`}</span>
                        <span>22 min ago</span>
                    </div>
                </div>
                <div>{post.message}</div>
                <div className={s.likeWrapper}>
                    <button className={s.likeBtn}>
                        <LikeIcon />
                    </button>
                    <span className="Post_likesCount__KCm6Q">12 Like</span></div>
            </div>
        </div>
    </div>).reverse()
    return <>  {postsElements}</>
}

export default PostsItems;