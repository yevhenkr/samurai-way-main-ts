import s from './Dialogs.module.css'
import React from 'react';
import {NavLink} from 'react-router-dom';

export const Dialogs = () => {
    return <div className={s.dialogues}>
        <div className={s.dialoguesItems}>
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={'/dialogs/1'}>Andrei</NavLink>
            </div>
            <div className={s.dilog}>
                <NavLink to={'/dialogs/2'}>Ivan</NavLink>
            </div>
            <div className={s.dilog}>
                <NavLink to={'/dialogs/3'}>Sergei</NavLink>
            </div>
            <div className={s.dilog}>
                <NavLink to={'/dialogs/4'}>Andrei</NavLink>
            </div>
            <div className={s.dilog}>
                <NavLink to={'/dialogs/5'}>Oleg</NavLink>
            </div>
        </div>
        <div className={s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>How are you itika</div>
            <div className={s.message}>You</div>
        </div>
    </div>
}