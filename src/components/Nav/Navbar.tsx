import React from 'react';
import s from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <div className={s.wrapperNav}>
        <nav className={s.nav}>
            <button className={s.item}>
                <NavLink className={s.nav} activeClassName={s.active} to={'/profile'}>Profile
                </NavLink>
            </button>
            <button className={`${s.item} ${s.active}`}>
                <NavLink className={s.nav} activeClassName={s.active} to={'/dialogs'}>Messages
                </NavLink>
            </button>
            <button className={s.item}>
                <NavLink className={s.nav} activeClassName={s.active} to={'/News'}>News
                </NavLink>
            </button>
            <button className={s.item}>
                <NavLink className={s.nav} activeClassName={s.active} to={'/Music'}>Music
                </NavLink>
            </button>
            <button className={s.item}>
                <NavLink className={s.nav} activeClassName={s.active} to={'/Users'}>Users
                </NavLink>
            </button>

        </nav>
        </div>
    );
}

export default Navbar;