import React from 'react';
import s from './Header.module.scss';
import {NavLink} from "react-router-dom";
import {MapDispatchToPropsType, MapStateToPropsType} from "./HeaderContainer";
import logo from '../../assets/img/ms-icon-310x310.png';

function Header(props: MapStateToPropsType & MapDispatchToPropsType) {
    return (
        <header className={s.header}>
            <img className={s.logo}
                src={logo} alt={'logo'}/>
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