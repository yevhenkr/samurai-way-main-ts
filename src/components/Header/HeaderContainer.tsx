import React from 'react';
import Header from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {getAuthUserDataThunkCreator} from "../../redux/auth-reducer";

export type MapStateToPropsType = {
    email: string,
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getAuthUserDataThunkCreator: () => void
}

type PropsType = MapDispatchToPropsType & MapStateToPropsType


class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getAuthUserDataThunkCreator()
    }

    render() {
        return <Header email={this.props.email} isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    email: state.auth.email,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {getAuthUserDataThunkCreator: getAuthUserDataThunkCreator})(HeaderContainer)