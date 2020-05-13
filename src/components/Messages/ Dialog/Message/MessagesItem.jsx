import React from "react";
import s from './MessagesItem.module.css'
import {NavLink} from "react-router-dom";

const MessagesItem = (props) =>{
    return(
        <div className={s.dialogsItem}>
            <div className={s.avatar}>
                <img src = {props.avatar}/>
             </div>
            <div className={s.message}>
                {props.message}
            </div>
        </div>
    )
};

export default MessagesItem;