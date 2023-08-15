import React from 'react';
import {DialogItems} from './DialogItems/DialogItems';
import {Messages} from './Messages/Messages';
import {DialogsType, MessageType} from '../../redux/state';
import s from './Dialogs.module.css'

type DialogPropsType = {
    dialogs: DialogsType[]
    messages: MessageType[]
}
export const Dialogs = (props: DialogPropsType) => {
    return <div className={s.dialogues}>
        <div className={s.dialoguesItems}>
            <DialogItems dialogs={props.dialogs}/>
        </div>

        <div className={s.messages}>
            <Messages messages={props.messages}/>
        </div>
    </div>
}