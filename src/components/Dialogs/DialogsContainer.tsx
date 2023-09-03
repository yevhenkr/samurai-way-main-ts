import React from 'react';
import {addMessageAC, changeNewMessageAC} from "../../redux/messages-page-reducer";
import {Dialogs} from "./Dialogs";
import {useSelector, useDispatch} from 'react-redux'
import {AppStateType} from "../../redux/redux-store";
import {DialogPageType} from "../../redux/state";

export const DialogsContainer = () => {
    const messagesPage = useSelector<AppStateType, DialogPageType>((state) => state.messagesPage)
    const dispatch = useDispatch()

    const changeTextField = (text: string) => {
        dispatch(changeNewMessageAC(text))
    }
    const clickOnAddMessage = () => {
        dispatch(addMessageAC(messagesPage.newMessage))
    }

    return <Dialogs changeTextField={(text) => changeTextField(text)}
                    clickOnAddMessage={clickOnAddMessage}
                    newMessage={messagesPage.newMessage}
                    dialogs={messagesPage.dialogs}
                    messages={messagesPage.messages}
    />
}