import React from "react";
import s from './Friends.module.css'

import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";
import DialogsItem from "../../Messages/ Dialog/DialogsItem";


const Friends = (props) => {
    let friendElement = props.friends.map(f => <Friend id={f.id} name={f.name} avatar={f.avatar}/>);

    return (
        <div className={s.friends}>
            <div className={s.h}>
                Friends
            </div>
            {friendElement}
        </div>
    );
}

export default Friends;