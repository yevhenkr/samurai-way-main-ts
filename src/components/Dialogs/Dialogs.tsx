import s from './Dialogs.module.css'
import React from 'react';
import {NavLink} from 'react-router-dom';

const DialogItem = (props: any) => {
    const path = '/dialogs/'
    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={`${path}${props.id}`}>{props.name}</NavLink>
    </div>
}
const Message = (props: any) => {
    return <div className={s.message}>{props.text}</div>
}
export const Dialogs = () => {
    const dialogs = [
        {name: 'Dimych', id: '1'},
        {name: 'Ivan', id: '2'},
        {name: 'Sergei', id: '3'},
        {name: 'Andrey', id: '4'},
        {name: 'Oleg', id: '5'}
    ]
    const messages = [
        {text: '- Hi', id: '1'},
        {text: '- How are you itika', id: '2'},
        {text: '- You', id: '3'}
    ]
    let dialogsElements = dialogs.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements= messages.map(message =>
            <Message text={message.text} id={message.id}/>)
    return <div className={s.dialogues}>
        <div className={s.dialoguesItems}>
            {dialogsElements}
        </div>
        <div className={s.messages}>
            {messagesElements}
        </div>
    </div>
}