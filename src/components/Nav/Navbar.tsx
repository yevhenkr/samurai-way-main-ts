import React from 'react';
import s from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';
import {PersonIcon} from "../../assets/icons/personIcon";
import {MessagesIcon} from "../../assets/icons/messagesIcon";
import UsersIcon from "../../assets/icons/usersIcon";
import NewsIcon from "../../assets/icons/newsIcon";
import MusicIcon from "../../assets/icons/musicIcon";

function Navbar() {
    return (
        <div className={s.wrapperNav}>
            <nav>
                <ul className={s.ul}>
                    <li className={s.item}>
                        <span className={s.icon}>
                            <PersonIcon/>
                        </span>
                        <NavLink className={s.navLink} activeClassName={s.active} to={'/profile'}>Profile
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <span className={s.icon}>
                            <MessagesIcon/>
                        </span>
                        <NavLink className={s.navLink} activeClassName={s.active} to={'/dialogs'}>Messages
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <span className={s.icon}>
                            <UsersIcon/>
                        </span>
                        <NavLink className={s.navLink} activeClassName={s.active} to={'/Users'}>Users
                        </NavLink>
                    </li>
                    <li className={s.item}>
                          <span className={s.icon}>
                            <NewsIcon/>
                        </span>
                        <NavLink className={s.navLink} activeClassName={s.active} to={'/News'}>News
                        </NavLink>
                    </li>
                    <li className={s.item}>
                        <span className={s.icon}>
                            <MusicIcon/>
                        </span>
                        <NavLink className={s.navLink} activeClassName={s.active} to={'/Music'}>Music
                        </NavLink>
                    </li>
                {/*<li><a aria-current="page" href="#/profile">*/}

                        {/*    <span>PProfile</span></a></li>*/}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;