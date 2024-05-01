import s from '../Dialogs.module.scss'
import React from 'react';
import {MessageType} from "../../../redux/messages-page-reducer";

type MessagesPropsType = {
    messages: MessageType[]
}

export const Messages = (props: MessagesPropsType) => {

    let messagesElements = props.messages.map((message: MessageType) =>
        <div key={message.id} className={s.message}>{message.text}</div>
    )
    return <>{messagesElements}</>
}