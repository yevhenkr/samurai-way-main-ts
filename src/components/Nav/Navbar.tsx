import React from 'react';
import s from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';
import {PersonIcon} from "../../assets/icons/personIcon";
import {MessagesIcon} from "../../assets/icons/messagesIcon";
import UsersIcon from "../../assets/icons/usersIcon";

function Navbar() {
    return (
        <div className={s.wrapperNav}>
            <nav>
                <ul className={s.nav}>
                    <li className={s.item}>
                        <span className={s.icon}>
                            <PersonIcon/>
                        </span>
                            <NavLink className={s.nav} activeClassName={s.active} to={'/profile'}>Profile
                            </NavLink>
                    </li>
                    <li className={s.item}>
                        <span className={s.icon}>
                            <MessagesIcon/>
                        </span>
                            <NavLink className={s.nav} activeClassName={s.active} to={'/dialogs'}>Messages
                            </NavLink>
                    </li>
                    <li className={s.item}>
                        <span className={s.icon}>
                            <UsersIcon />
                        </span>
                        <NavLink className={s.nav} activeClassName={s.active} to={'/Users'}>Users
                        </NavLink>
                    </li>
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
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;