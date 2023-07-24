import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink className={({isActive}) => isActive ? s.active : s.nav} to={'/profile'}>Profile
                </NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink className={({isActive}) => isActive ? s.active : s.nav} to={'/message'}>Messages
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
        </nav>
    );
}

export default Navbar;