import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Input, Textarea} from "../comman/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean
}
const maxLength30 = maxLengthCreator(30)
const maxLength20 = maxLengthCreator(20)

let LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field placeholder={"Loadin"} component={Textarea} name={"loadin"}
                    validate={[requiredField, maxLength30]}/></div>
        <div><Field placeholder={"Password"} component={Input} name={"password"}
                    validate={[requiredField, maxLength20]}/></div>
        <div><Field type="checkbox" component={"input"} name={"rememberMe"}/>remember me</div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: "login"
})(LoginForm)