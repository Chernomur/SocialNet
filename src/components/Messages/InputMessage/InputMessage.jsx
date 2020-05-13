import React from "react";
import s from './InputMessage.module.css'
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../../Redux/messages-reducer";


const InputMessage = (props) => {
    let inputText=React.createRef();
    let sendMessage = () =>{
      props.sendMessage();
    };

    let updateMessageText = () =>{
        let text = inputText.current.value;
        props.updateMessageText(text);
    };


    return (
        <div className={s.newMessage}>
            <div className={s.message}>
                 <textarea onChange={updateMessageText} value={props.message.updateMessage} placeholder={'Input text'} ref={inputText} >

                </textarea>
            </div>

            <div className={s.button}>
            <button onClick={sendMessage} >
                Send
            </button>
            </div>

        </div>
    )
};
export default InputMessage;