import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type MapStatePropsType ={
    isAuth: boolean
}
const mapStateToProps = (state:AppStateType):MapStatePropsType=>{
    return{
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect <T>(Component: any) {
    function RediredtComponent(props: MapStatePropsType): any {
        let {isAuth, ...restProps}= props
        if (!props.isAuth) {
            return <Redirect to={"/login"}/>
        }
        return <Component {...restProps as T}/>
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RediredtComponent)

    return ConnectedRedirectComponent
}