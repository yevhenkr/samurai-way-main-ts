import {SideBarType} from '../../redux/state';
import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {useSelector} from "react-redux";
import Friends from "./Friends";
import s from "./BestFriends.module.scss"


function BestFriends() {
    const sidebar = useSelector<AppStateType, SideBarType>(state => state.sideBar)
    return (
        <div className={s.main}>
             <div style={{color: 'chocolate', textDecoration: 'underline'}} className={s.main}>
                 <Friends friends={sidebar.friends}/>
             </div>
        </div>
    );
}

export default BestFriends;