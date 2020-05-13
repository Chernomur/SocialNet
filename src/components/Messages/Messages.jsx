import React from "react";
import s from './Messages.module.css'
import {NavLink} from "react-router-dom";
import DialogsItem from "./ Dialog/DialogsItem";
import MessagesItem from "./ Dialog/Message/MessagesItem";

import InputMessageContainer from "./InputMessage/InputMessageContainer";

const Messages = (props) => {

    let dialogElement = props.dialogsData.map(d => <DialogsItem id ={d.id} name={d.name} avatar={d.avatar}/>);
    let messageElement = props.messageData.map( m => <MessagesItem message={m.message} avatar={m.avatar} />);

    return (
        <div className={s.messages}>
            <div className={s.dialogs}>
                {dialogElement}

            </div>
            <div className={s.dialog}>
                {messageElement}

               <InputMessageContainer/>
            </div>

        </div>
    )
}
export default Messages;