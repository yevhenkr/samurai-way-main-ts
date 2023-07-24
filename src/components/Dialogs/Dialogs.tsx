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
    return <div className={s.dialogues}>
        <div className={s.dialoguesItems}>
            <DialogItem name={'Dimych'} id={'1'}/>
            <DialogItem name={'Ivan'} id={'2'}/>
            <DialogItem name={'Sergei'} id={'3'}/>
            <DialogItem name={'Andrey'} id={'4'}/>
            <DialogItem name={'Oleg'} id={'5'}/>

        </div>
        <div className={s.messages}>
            <Message text={'- Hi'}/>
            <Message text={'- How are you itika'}/>
            <Message text={'- You'}/>
        </div>
    </div>
}