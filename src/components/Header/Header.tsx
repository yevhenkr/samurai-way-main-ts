import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {MapStateToPropsType} from "./HeaderContainer";

function Header(props: MapStateToPropsType) {
    debugger
    return (
        <header className={s.header}>
            <img
                src={'https://1000logos.net/wp-content/uploads/2016/10/Batman-Logo-1966.png'} alt={'logo'}/>
            <div className={s.loginBlock}>
                {props.isAuth ?
                    <NavLink to={'/login'}>{props.email}</NavLink> :
                    <NavLink to={'/login'}>{"Login"}</NavLink>}

            </div>
        </header>
    );
}

export default Header;