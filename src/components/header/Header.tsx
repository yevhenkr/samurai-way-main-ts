import React from 'react';
import s from './Header.module.scss';
import {NavLink} from "react-router-dom";
import {MapDispatchToPropsType, MapStateToPropsType} from "./HeaderContainer";
import logo from '../../assets/img/ms-icon-310x310.png';
import { Button } from '../../components/ui/button'


function Header(props: MapStateToPropsType & MapDispatchToPropsType) {
    return (
        <header className={s.header}>
            <img className={s.logo}
                src={logo} alt={'logo'}/>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className={s.loginBlock}>
                {props.isAuth ?
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><NavLink to={'/login'}>{props.email}</NavLink>
                        <Button onClick={props.logout}>Log out</Button>
                    </div> :
                    <div>
                    <NavLink to={'/login'}>{"Login"}</NavLink>
                    </div>}
            </div>
        </header>
    );
}

export default Header;