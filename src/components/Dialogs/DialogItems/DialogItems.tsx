import s from './../Dialogs.module.css'
import React from 'react';
import {NavLink} from 'react-router-dom';
import {DialogsType} from '../../../index';

export const DialogItems = (props: any) => {
    const path = '/dialogs/'

    let dialogsElements = props.dialogs.map((dialog: DialogsType) =>
        <div key={dialog.id}>
            <NavLink to={`${path}${dialog.id}`}>{dialog.name}</NavLink>
        </div>
    )

    return <div className={s.dialog + ' ' + s.active}>
        {dialogsElements}
    </div>
}