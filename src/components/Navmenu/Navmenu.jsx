import React from "react";
import s from './Navmenu.module.css'
import Profile from "../Profile/Profile";
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
const Navmenu = (props) => {
    return(
        <nav className = {s.navmenu}>
            <div>
                <NavLink to = '/profile' className={s.name} activeClassName={s.active} >Profile</NavLink>
            </div>
            <div>
                <NavLink to = '/messages' className={s.name} activeClassName={s.active} >Messages</NavLink>
            </div>
            <div>
                <NavLink to = '/Users' className={s.name} activeClassName={s.active}>Users</NavLink>
            </div>
            <div>
                <NavLink to= '/Music'className={s.name}  activeClassName={s.active}>Music</NavLink>
            </div>
            <div>
                <NavLink to= '/Settings' className={s.name} activeClassName={s.active}>Settings </NavLink>
            </div>
            {/*<Friends friends={props.store.friends} />*/}
        </nav>
    );
}
export default Navmenu;