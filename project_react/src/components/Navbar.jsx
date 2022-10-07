import { React } from 'react';
import css from './Navbar.module.css';


const Navbar = () => {
    return (
        <nav className={css.nav}>
            <div>
                <a href='#s'>Profile</a>
            </div>
            <div>
                <a href='#s'>Messages</a>
            </div>
            <div>
                <a href='#s'>News</a>
            </div>
            <div>
                <a href='#s'>Music</a>
            </div>
            <div>
                <a href='#s'>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;