import s from './../Dialogs.module.css'
import React from 'react';
import {NavLink} from 'react-router-dom';

type DialogType = {
    name: string,
    id: string
}

export type PropsType = {
    dialogs: DialogType[]
}

export const DialogItems = (props: PropsType) => {
    const path = '/dialogs/'

    let dialogsElements = props.dialogs.map(dialog =>
        <div>
            <NavLink to={`${path}${dialog.id}`}>{dialog.name}</NavLink>
        </div>
    )


    return <div className={s.dialog + ' ' + s.active}>
        {dialogsElements}
    </div>
}