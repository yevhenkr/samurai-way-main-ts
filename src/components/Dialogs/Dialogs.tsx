import s from './Dialogs.module.css'
import React from 'react';
import {DialogItems} from './DialogItems/DialogItems';
import {Messages} from './Messages/Messages';

export const Dialogs = (props: any) => {
    return <div className={s.dialogues}>
        <div className={s.dialoguesItems}>
            <DialogItems dialogs={props.dialogs}/>
        </div>
        <div className={s.messages}>
            <Messages messages={props.messages}/>
        </div>
    </div>
}