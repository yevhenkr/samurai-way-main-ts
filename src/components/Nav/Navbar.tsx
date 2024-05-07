import React from 'react';
import s from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';
import {PersonIcon} from "../../assets/icons/personIcon";

function Navbar() {
    return (
        <div className={s.wrapperNav}>
            <nav>
                <ul className={s.nav}>
                    <li className={s.item}>
                        <span className={s.icon}>
                            <PersonIcon/>
                        </span>
                        <NavLink className={s.nav } activeClassName={s.active} to={'/profile'}>Profile
                        </NavLink>
                    </li>
                <span className={`${s.item} ${s.active}`}>
                    <NavLink className={s.nav} activeClassName={s.active} to={'/dialogs'}>Messages
                    </NavLink>
                </span>
                <span className={s.item}>
                    <NavLink className={s.nav} activeClassName={s.active} to={'/News'}>News
                    </NavLink>
                </span>
                <span className={s.item}>
                    <NavLink className={s.nav} activeClassName={s.active} to={'/Music'}>Music
                    </NavLink>
                </span>
                {/*<li><a aria-current="page" href="#/profile">*/}

                {/*    <span>PProfile</span></a></li>*/}
                <span className={s.item}>
                    <NavLink className={s.nav} activeClassName={s.active} to={'/Users'}>Users
                    </NavLink>
                </span>
                </ul>

            </nav>
        </div>
    );
}

export default Navbar;