import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.avatar}>
                <img  src='https://s3.amazonaws.com/assets.materialup.com/users/pictures/000/615/601/preview/my_avatar-01.jpg?1577896777'/>
            </div>
            <div className={s.textpost}> {props.postText}
            </div>
        </div>
    )
}
export default Post;