import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post.jsx";
import {addPostActionCreator, updatePostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
/*const MyPostsContainer = (props) => {

    let addpost = () =>
    {
        props.dispatch(addPostActionCreator());
    };
    let updatePostText = (text) =>
    {
        let action = updatePostTextActionCreator(text);
        props.dispatch (action);
    };

    return (
        <MyPosts updatePostText={updatePostText} addpost={addpost} posts={props.store.getState().profile} />
    )
};*/

let mapStateToProps=(state)=>{
  return     {
      posts: state.profile
  }
};
let mapDispatchToProps=(dispatch)=>{
    return {
        addpost: () => {
            dispatch(addPostActionCreator());
        },
        updatePostText: (text) => {
            let action = updatePostTextActionCreator(text);
            dispatch(action);
        }
    }
}

const  MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;