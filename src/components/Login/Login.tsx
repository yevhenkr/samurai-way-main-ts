import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";

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
let LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field placeholder={"Loadin"} component={"input"} name={"loadin"}/></div>
        <div><Field placeholder={"Password"} component={"input"} name={"password"}/></div>
        <div><Field type="checkbox" component={"input"} name={"rememberMe"}/>remember me</div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: "login"
})(LoginForm)

