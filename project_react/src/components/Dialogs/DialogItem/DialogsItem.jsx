import {React} from "react";
import css from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={css.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default Dialog;