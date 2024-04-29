import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {MapDispatchToPropsType, MapStateToPropsType} from "./HeaderContainer";

function Header(props: MapStateToPropsType & MapDispatchToPropsType) {
    return (
        <header className={s.header}>
            <img
                src={'https://1000logos.net/wp-content/uploads/2016/10/Batman-Logo-1966.png'} alt={'logo'}/>
            <div className={s.loginBlock}>
                {props.isAuth ?
                    <div><NavLink to={'/login'}>{props.email}</NavLink>
                        <button onClick={props.logout}>Log out</button>
                    </div> :
                    <div>
                    <NavLink to={'/login'}>{"Login"}</NavLink>
                    </div>}
            </div>
        </header>
    );
}

export default Header;