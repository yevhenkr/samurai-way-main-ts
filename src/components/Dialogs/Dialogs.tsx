import React from 'react';
import {DialogItems} from './DialogItems/DialogItems';
import {Messages} from './Messages/Messages';
import s from './Dialogs.module.scss'
import {DialogPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../comman/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

export const Dialogs = (props: DialogPropsType) => {

    const changeTextField = (text: string) => {
        props.changeNewMessage(text)
    }

    const addNewMessage = (formData: FormDataType) => {
        props.addMessage(formData.newMessageBody)
    }

    return <div className={s.dialogues}>
        <div className={s.dialoguesItems}>
            <DialogItems dialogs={props.dialogs}/>
        </div>

        <div className={s.messages}>
            <Messages messages={props.messages}/>
        </div>
        <AddMessageReduxForm onSubmit={addNewMessage}/>
    </div>
}

type FormDataType = {
    newMessageBody: string,
}
const maxLength100 = maxLengthCreator(100)
let AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name="newMessageBody" placeholder="Enter your Message"
               validate={[requiredField, maxLength100]}/>
        <button>AddMessage</button>
    </form>
}

const AddMessageReduxForm = reduxForm<FormDataType>({
    form: "dialogAddMessaqeForm"
})(AddMessageForm)