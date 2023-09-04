import React from 'react';
import { addMessageAC, changeNewMessageAC,
    DialogPageType,
    DialogsType,
    MessageType
} from "../../redux/messages-page-reducer";
import { Dialogs} from "./Dialogs";
import {useSelector, useDispatch, connect} from 'react-redux'
import {AppDispatch, AppStateType} from "../../redux/redux-store";


type MapStateToPropsType = {
    dialogs: DialogsType[]
    messages: MessageType []
    newMessage: string
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessage: state.messagesPage.newMessage
    };
}

type MapDispatchPropsType = {
    changeTextField: (newMessage: string) => void
    clickOnAddMessage: () => void
}

export type DialogPropsType = MapStateToPropsType & MapDispatchPropsType

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchPropsType => {
    return {
        changeTextField: (newMessage: string) => {
            dispatch(changeNewMessageAC(newMessage))
        },
        clickOnAddMessage: () => {
            dispatch(addMessageAC())
        },
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)