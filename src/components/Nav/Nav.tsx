import React from 'react';
import s from './Nav.module.css';
import {NavLink} from 'react-router-dom';

function Nav() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile'}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={'/message'}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/message'}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/message'}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/message'}>News</NavLink>
            </div>
        </nav>
    );
}

export default Nav;