import s from '../Dialogs.module.scss'
import React from 'react';
import {NavLink} from 'react-router-dom';
import {DialogsType} from "../../../redux/messages-page-reducer";

type DialogItemsPropsType = {
    dialogs: DialogsType[]
}
export const DialogItems = (props: DialogItemsPropsType) => {
    const path = '/dialogs/'
    console.log(`${props.dialogs}`)
    let dialogsElements = props.dialogs.map((dialog: DialogsType, index) =>
        <div key={dialog.id}>
            <NavLink to={`${path}${index}`}>{dialog.name}</NavLink>
        </div>
    )

    return <div className={s.dialog + ' ' + s.active}>
        {dialogsElements}
    </div>
}