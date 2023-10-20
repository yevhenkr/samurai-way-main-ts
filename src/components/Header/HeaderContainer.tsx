import React from 'react';
import axios from "axios";
import Header from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {setAuthMe} from "../../redux/auth-reducer";

export type MapStateToPropsType = {
    email: string,
    isAuth: boolean
}
type MapDispatchToPropsType = {
    setAuthMe: (id: number, login: string, email: string) => void
}

type PropsType = MapDispatchToPropsType & MapStateToPropsType


class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        const instance = axios.create({
            baseURL: "https://social-network.samuraijs.com/api/1.0",
            withCredentials: true
        })
        instance.get(`/auth/me`)
            .then(response => {
                    if (response.data.resultCode === 0) {
                        let {id, email, login} = response.data.data
                        this.props.setAuthMe(id, email, login)
                    }
                }
            )
    }

    render() {
        return <Header email={this.props.email} isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    email: state.auth.email,
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {setAuthMe})(HeaderContainer)