import React from "react";
import s from './InputMessage.module.css'
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../../Redux/messages-reducer";
import InputMessage from "./InputMessage";
import {connect} from "react-redux";


/*const InputMessageContainer = (props) => {
    let sendMessage = () =>{
        props.dispatch(sendMessageActionCreator());
    };

    let updateMessageText = (text) =>{
        props.dispatch(updateMessageTextActionCreator(text));
    };
    return (
        <InputMessage message={props.store.getState().messages} updateMessageText={updateMessageText} sendMessage={sendMessage}/>
    )
};*/

const mapStateToProps=(state)=>{
  return{
      message: state.messages
  }
};
const mapDispatchToProps=(dispatch)=>{
    return{
        sendMessage: ()=>{
            dispatch(sendMessageActionCreator());
            },
        updateMessageText:(text)=>{
            dispatch(updateMessageTextActionCreator(text));
        }
    }
};

const InputMessageContainer = connect(mapStateToProps, mapDispatchToProps)(InputMessage);

export default InputMessageContainer;