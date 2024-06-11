import React from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {SideBarType} from "../../redux/state";
import s from "./Footer.module.scss"
function Footer() {
    const sidebar = useSelector<AppStateType, SideBarType>(state => state.sideBar)

    return (<footer className={s.footer}>
            <div>
                <section>
                    <div>
                        <span>Samurai Social Network ©2023 Created by Evgenii</span>
                        <a href="#">
                            <img src="images/logo.svg" height="39" width="200" alt="логотип"/>
                        </a>
                    </div>
                </section>
            </div>
        </footer>
    );
}

export default Footer;