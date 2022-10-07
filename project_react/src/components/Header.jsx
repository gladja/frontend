import { React } from 'react';
import logo from './../logo.svg';
import css from './Header.module.css';

const Header = () => {
    return (
        <header className={css.header}>
            <img src={logo} alt='logoGo' />
        </header>
    );
}

export default Header;

