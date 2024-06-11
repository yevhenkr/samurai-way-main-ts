import React from 'react';
import s from './Header.module.scss';
import {NavLink} from "react-router-dom";
import {MapDispatchToPropsType, MapStateToPropsType} from "./HeaderContainer";
import logo from '../../assets/img/ms-icon-310x310.png';
import { Button } from '../../components/ui/button';


function Header(props: MapStateToPropsType & MapDispatchToPropsType) {
    return (
        <header className={s.header}>
            <img className={s.logo}
                src={logo} alt={'logo'}/>
            <div className={s.loginBlock}>
                {props.isAuth ?
                    <div className={s.logoOutWrapper}><NavLink to={'/login'}>{props.email}</NavLink>
                        <Button onClick={props.logout}>Log out</Button>
                    </div>
                    : <div>
                        <Button  to={'/login'} as={NavLink}>{"Login"}</Button>
                    </div>}
            </div>
        </header>
    );
}

export default Header;