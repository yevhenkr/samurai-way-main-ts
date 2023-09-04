import React from 'react';
import {DialogItems} from './DialogItems/DialogItems';
import {Messages} from './Messages/Messages';
import s from './Dialogs.module.css'
import TextFild from "../TextFieldArea/TextFieldArea";
import SimpleButton from "../SimpleButton/SimpleButton";
import {DialogPropsType} from "./DialogsContainer";

export const Dialogs = (props: DialogPropsType) => {

    const changeTextField = (text: string) => {
        props.changeTextField(text)
    }
    const clickOnAddMessage = () => {
        props.clickOnAddMessage()
    }

    return <div className={s.dialogues}>
        <div className={s.dialoguesItems}>
            <DialogItems dialogs={props.dialogs}/>
        </div>

        <div className={s.messages}>
            <Messages messages={props.messages}/>
        </div>
        <div>
            <TextFild text={props.newMessage} callback={(newMessage) => changeTextField(newMessage)}/>
            <SimpleButton name={"Add Message"} callback={clickOnAddMessage}/>
        </div>
    </div>
}