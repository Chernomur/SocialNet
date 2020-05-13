import React from "react";
import stile from "./Users.module.css";
import userPhoto from '../../assets/images/userPhoto.png'
import {NavLink} from "react-router-dom";

const Users = (props) => {

    let pages = [];

    let pageCount = Math.ceil(props.usersTotalCount / props.pageSize);

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (<div>
            {pages.map(p => {
                return <span className={props.currentPage === p && stile.selectedPage}

                             onClick={() => {
                                 props.onPageChanged(p)
                             }}> {p} </span>
            })}


            {
                props.users.map(u => <div key={u.id}>
                    <div>
                        <NavLink to={'/profile/'+u.id}>
                        {<img className={stile.avatar} src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        }<span>{u.name}</span>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                    <div>

                    </div>

                </div>)
            }
        </div>
    )
 }

export default Users;