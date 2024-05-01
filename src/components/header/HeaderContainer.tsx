import React from 'react';
import Header from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

export type MapStateToPropsType = {
    email: string,
    isAuth: boolean
}
export type MapDispatchToPropsType = {
    logout: () => void
}

type PropsType = MapDispatchToPropsType & MapStateToPropsType


class HeaderContainer extends React.Component<PropsType> {
    render() {
        return <Header  logout={this.props.logout} email={this.props.email}
                       isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    email: state.auth.email,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {logout})(HeaderContainer)