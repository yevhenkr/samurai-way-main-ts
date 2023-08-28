import React from 'react';
import {DialogItems} from './DialogItems/DialogItems';
import {Messages} from './Messages/Messages';
import {
    ActionType,
    DialogPageType,
} from '../../redux/state';
import s from './Dialogs.module.css'
import TextFild from "../TextFieldArea/TextFieldArea";
import SimpleButton from "../SimpleButton/SimpleButton";
import {addMessageAC, changeNewMessageAC} from "../../redux/messages-page-reducer";

type DialogPropsType = {
    dialogPageType: DialogPageType
    dispatch: (action: ActionType) => void
}
export const Dialogs = (props: DialogPropsType) => {
    const changeTextField = (text: string) => {
        props.dispatch(changeNewMessageAC(text))
    }
    const clickOnAddMessage = () => {
        props.dispatch(addMessageAC(props.dialogPageType.newMessage))
    }

    return <div className={s.dialogues}>
        <div className={s.dialoguesItems}>
            <DialogItems dialogs={props.dialogPageType.dialogs}/>
        </div>

        <div className={s.messages}>
            <Messages messages={props.dialogPageType.messages}/>
        </div>
        <div>
            <TextFild text={props.dialogPageType.newMessage} callback={(newMessage) => changeTextField(newMessage)}/>
            <SimpleButton name={"Add Message"} callback={clickOnAddMessage}/>
        </div>
    </div>
}