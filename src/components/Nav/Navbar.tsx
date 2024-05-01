import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink className={s.nav} activeClassName={s.active} to={'/profile'}>Profile
                </NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink className={s.nav} activeClassName={s.active} to={'/dialogs'}>Messages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={s.nav} activeClassName={s.active} to={'/News'}>News
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={s.nav} activeClassName={s.active} to={'/Music'}>Music
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={s.nav} activeClassName={s.active} to={'/Users'}>Users
                </NavLink>
            </div>

        </nav>
    );
}

export default Navbar;