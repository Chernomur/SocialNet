import React from "react";
import s from './Messages.module.css'
import {NavLink} from "react-router-dom";
import DialogsItem from "./ Dialog/DialogsItem";
import MessagesItem from "./ Dialog/Message/MessagesItem";

import InputMessageContainer from "./InputMessage/InputMessageContainer";
import {connect} from "react-redux";
import Messages from "./Messages";


const mapStateToProps=(state)=>{
    return{
        dialogsData: state.messages.dialogsData,
        messageData: state.messages.messageData
    }
};
const mapDispatchToProps=()=>{
return{};
};

const MessagesContainer=connect(mapStateToProps,mapDispatchToProps )(Messages);

export default MessagesContainer;