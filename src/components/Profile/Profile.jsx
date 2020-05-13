import React from "react";
import s from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from '../Common/Preloader/Preloader';


const Profile = (props) => {
    debugger;
    if(props.profileData == null){
        return <div>JOPA KONiA</div>
    }
    return (
        <header className={s.profile}>
            <div className={s.profileHeader}>
                <img src="https://miro.medium.com/max/2160/1*32lPq__uk-dipCDM7WZKBA.jpeg"/>
            </div>
            <div className={s.avatar}>
                {/* <img  src={props.profile.profile.photos.large}/>*/}
            </div>
            <div className={s.description}>
                <h3> {props.profile.fullName} </h3>
                <h4> {props.profile.lookingForAJob? <img style={{height: 80}} src={'https://img.amur.info/res/articles/5837/660x440/848ffbe3f35bac83eb01ce17e7c01ac9.jpg'}/> : <img src={'https://i.pinimg.com/originals/9e/1d/d1/9e1dd199a2f7f9c709f765fc8dd2107f.png'}/>}</h4>
                <h5>Ищет работу? {props.profile.lookingForAJobDescription}</h5>


            </div>
            <div className={s.myPosts}>
               <MyPostsContainer store={props.store} dispatch={props.dispatch}/>
            </div>
        </header>
    )
}
export default Profile;