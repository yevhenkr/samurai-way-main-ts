import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Friends from '../Friend/Friends';
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {SideBarType} from "../../redux/state";

function Navbar() {
    const sidebar =useSelector<AppStateType, SideBarType>(state => state.sideBar)

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink className={({isActive}) => isActive ? s.active : s.nav} to={'/profile'}>Profile
                </NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink className={({isActive}) => isActive ? s.active : s.nav} to={'/dialogs'}>Messages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={({isActive}) => isActive ? s.active : s.nav} to={'/News'}>News
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={({isActive}) => isActive ? s.active : s.nav} to={'/Music'}>Music
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={({isActive}) => isActive ? s.active : s.nav} to={'/Users'}>Users
                </NavLink>
            </div>
            <div style={{color: 'chocolate', textDecoration: 'underline'}}>Friends
                <Friends friends={sidebar.friends}/>
            </div>
        </nav>
    );
}

export default Navbar;