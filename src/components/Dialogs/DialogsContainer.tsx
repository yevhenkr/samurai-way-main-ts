import React from 'react';
import {
    addMessage, changeNewMessage,
    DialogsType,
    MessageType
} from "../../redux/messages-page-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from 'react-redux'
import {AppStateType} from "../../redux/redux-store";


type MapStateToPropsType = {
    dialogs: DialogsType[]
    messages: MessageType []
    newMessage: string
    isAuth: boolean
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessage: state.messagesPage.newMessage,
        isAuth: state.auth.isAuth
    };
}

type MapDispatchPropsType = {
    changeNewMessage: (newMessage: string) => void
    addMessage: () => void
}

export type DialogPropsType = MapStateToPropsType & MapDispatchPropsType

// const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchPropsType => {
//     return {
//         changeTextField: (newMessage: string) => {
//             dispatch(changeNewMessage(newMessage))
//         },
//         clickOnAddMessage: () => {
//             dispatch(addMessage())
//         },
//     }
// }

export const DialogsContainer = connect(mapStateToProps, {changeNewMessage, addMessage})(Dialogs)