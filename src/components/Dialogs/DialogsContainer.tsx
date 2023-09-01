import React from 'react';
import {StoreType} from '../../redux/state';
import {addMessageAC, changeNewMessageAC} from "../../redux/messages-page-reducer";
import {Dialogs} from "./Dialogs";

type DialogPropsType = {
    store: StoreType
}
export const DialogsContainer = (props: DialogPropsType) => {

    const changeTextField = (text: string) => {
        props.store.dispatch(changeNewMessageAC(text))
    }
    const clickOnAddMessage = () => {
        props.store.dispatch(addMessageAC(props.store.getState().messagesPage.newMessage))
    }

    return <Dialogs changeTextField={(text) => changeTextField(text)}
                    clickOnAddMessage={clickOnAddMessage}
                    newMessage={props.store.getState().messagesPage.newMessage}
                    dialogs={props.store.getState().messagesPage.dialogs}
                    messages={props.store.getState().messagesPage.messages}
    />
}