import React from 'react';
import s from './Header.module.css';

function Header() {
    return (
        <header className={s.header}>
            <img
                src={'https://1000logos.net/wp-content/uploads/2016/10/Batman-Logo-1966.png'} alt={'logo'}/>
        </header>
    );
}

export default Header;