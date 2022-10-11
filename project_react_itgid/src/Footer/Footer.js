import css from './Footer.module.css';

function Footer() {
    return (
        <div className={css.footer}>
            <div className={css.title}>
                React site
            </div>
            <div className={css.text}>
                2022 copyright. All rights reserved.
            </div>
        </div>
    );
}
export default Footer;