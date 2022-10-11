import  css from './Header.module.css';

function Header() {
    return (
        <div className={css.header}>
            <h1 className={css.title}>React site</h1>
            <div className={css.slogan}>utp slogan</div>
        </div>

    );
}
export default Header;