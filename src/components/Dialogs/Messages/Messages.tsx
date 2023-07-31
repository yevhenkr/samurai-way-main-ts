import s from './../Dialogs.module.css'
import React from 'react';

export const Messages = () => {

    const messages = [
        {text: '- Hi', id: '1'},
        {text: '- How are you itika', id: '2'},
        {text: '- You', id: '3'}
    ]

    let messagesElements = messages.map(message =>
        <div className={s.message}>{message.text}</div>
    )

    return <>{messagesElements}</>
}