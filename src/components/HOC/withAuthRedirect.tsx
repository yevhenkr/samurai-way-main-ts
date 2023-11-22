import React, {ComponentType, FC} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T extends JSX.IntrinsicAttributes>(Component: ComponentType<T>) {
    const RedirectComponent: FC<MapStatePropsType> = (props) => {
        let {isAuth, ...restProps} = props

        if (!props.isAuth) {
            return <Redirect to='/login'/>
        }
        // @ts-ignore
        return <Component {...props as T}/>
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}