import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";


const DialogsItem = (props) => {

    let path = `/messages/${props.id}`;

    return(
        <div className={s.dialogsItem}>
            <div className={s.avatar}>
                <img src={props.avatar} />
            </div>
            <div className={s.name}>
                <NavLink to={path} activeClassName={s.active}> {props.name} </NavLink>
            </div>

        </div>
    )
}

export default DialogsItem;