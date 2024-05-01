import React from "react";
import Navbar from "../Nav/Navbar";
import Friends from "../Friend/Friends";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {SideBarType} from "../../redux/state";
import s from "./SideBar.module.scss"
function SideBar() {
    const sidebar = useSelector<AppStateType, SideBarType>(state => state.sideBar)

    return (<div className={s.wrapper}>
            <Navbar/>
                <Friends friends={sidebar.friends}/>
        </div>
    );
}

export default SideBar;