import s from './../Dialogs.module.css'
import React from 'react';
import {MessageType} from '../../../index';

export const Messages = (props: any) => {
    let messagesElements = props.messages.map((message: MessageType) =>
        <div key={message.id} className={s.message}>{message.text}</div>
    )
    return <>{messagesElements}</>
}