import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Input, Textarea} from "../comman/formsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import style from "../comman/formsControls/FormsControl.module.scss"

type Props = InjectedFormProps<FormDataType> & {
    // Добавьте пропсы, которые поставляются через connect
    login: (email: string, password: string, rememberMe: boolean) => void;
    isAuth: boolean;
};
const Login: React.FC<Props> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)

type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
    isAuth: boolean
}
const maxLength30 = maxLengthCreator(30)

let LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><Field placeholder={"Email"} component={Textarea} name={"email"}
                    validate={[requiredField, maxLength30]} /></div>
        <div><Field placeholder={"Password"} component={Input} name={"password"} type={"password"}
                    validate={[requiredField, maxLength30]}/></div>
        <div><Field type="checkbox" component={"input"} name={"rememberMe"}/>remember me</div>
        {props.error && <div className={style.formSummaryError}>
            {props.error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: "login"
})(LoginForm)