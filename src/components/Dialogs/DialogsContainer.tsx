import React, {FC} from 'react';
import {
    addMessage,
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
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    console.log(state)
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
    };
}

type MapDispatchPropsType = {
    changeNewMessage: (newMessage: string) => void
    addMessage: (newMessageBody: string) => void
}

export type DialogPropsType = MapStateToPropsType & MapDispatchPropsType

export const DialogsContainer = compose<FC>(
    connect(mapStateToProps, {
        addMessage
    }), withAuthRedirect)(Dialogs)