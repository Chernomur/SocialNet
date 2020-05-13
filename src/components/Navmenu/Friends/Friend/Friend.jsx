import React from "react";
import s from './Friend.module.css'

import {NavLink} from "react-router-dom";

const Friend = (props) => {
   let path = `/messages/${props.id}`;
    return (
        <div className={s.friend}>
             <div className={s.avatar}>
                <img src={props.avatar}/>
            </div>
            <div className={s.name}>
               <NavLink className={s.aname} to={path} > {props.name}</NavLink>
            </div>
        </div>
    );
}

export default Friend;