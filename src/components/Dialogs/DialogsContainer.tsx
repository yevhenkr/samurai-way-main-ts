import React, {FC} from 'react';
import {
    addMessage, changeNewMessage,
    DialogsType,
    MessageType
} from "../../redux/messages-page-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from 'react-redux'
import {AppStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToPropsType = {
    dialogs: DialogsType[]
    messages: MessageType []
    newMessage: string
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    console.log(state)
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessage: state.messagesPage.newMessage,

    };
}

type MapDispatchPropsType = {
    changeNewMessage: (newMessage: string) => void
    addMessage: () => void
}

export type DialogPropsType = MapStateToPropsType & MapDispatchPropsType

export const DialogsContainer = compose<FC>(
    connect(mapStateToProps, {
        changeNewMessage,
        addMessage
    }), withAuthRedirect)(Dialogs)