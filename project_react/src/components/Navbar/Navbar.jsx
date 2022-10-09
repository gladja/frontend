import { React } from 'react';
import css from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={css.nav}>
            <div className={css.item}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs'>Messages</NavLink>
            </div>
            <div>
                <a href='/news'>News</a>
            </div>
            <div>
                <a href='/music'>Music</a>
            </div>
            <div>
                <a href='/settings'>Settings</a>
            </div>
        </nav>
    );
}
export default Navbar;