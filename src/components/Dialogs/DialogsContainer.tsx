import React, {useContext} from 'react';
import {addMessageAC, changeNewMessageAC} from "../../redux/messages-page-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from '../../store-context';

export const DialogsContainer = () => {
    const store = useContext(StoreContext);

    const changeTextField = (text: string) => {
        store.dispatch(changeNewMessageAC(text))
    }
    const clickOnAddMessage = () => {
        store.dispatch(addMessageAC(store.getState().messagesPage.newMessage))
    }

    return <Dialogs changeTextField={(text) => changeTextField(text)}
                    clickOnAddMessage={clickOnAddMessage}
                    newMessage={store.getState().messagesPage.newMessage}
                    dialogs={store.getState().messagesPage.dialogs}
                    messages={store.getState().messagesPage.messages}
    />
}