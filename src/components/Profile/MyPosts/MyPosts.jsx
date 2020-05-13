import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post.jsx";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../Redux/profile-reducer";
const MyPosts = (props) => {
    let postsElement = props.posts.postsData.map( p =><Post postText={p.postText} />);
    let newPostElement = React.createRef();


    let addpost = () =>
    {
        props.addpost();
    };
    let updatePostText = () =>
    {
        let text = newPostElement.current.value;
        props.updatePostText(text);
    };

    return (
        <div className={s.newpost}>
            <div className={s.text}>
                <textarea onChange={updatePostText} value={props.posts.updatePost} ref={newPostElement}/>
            </div>
            <div className={s.button}>
                <button onClick={addpost} >New post</button>
            </div >
            {postsElement}
        </div>
    )
}
export default MyPosts;