import s from './Dialogs.module.css'
import React from 'react';
import {DialogItems} from './DialogItems/DialogItems';
import {Messages} from './Messages/Messages';

const dialogs = [
    {name: 'Dimych', id: '1'},
    {name: 'Ivan', id: '2'},
    {name: 'Sergei', id: '3'},
    {name: 'Andrey', id: '4'},
    {name: 'Oleg', id: '5'}
]

export const Dialogs = () => {
    return <div className={s.dialogues}>
        <div className={s.dialoguesItems}>
            <DialogItems dialogs={dialogs}/>
        </div>
        <div className={s.messages}>
            <Messages/>
        </div>
    </div>
}