import {React} from "react";
import css from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={css.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return <div className={css.message}>{props.post}</div>
}

const Dialogs = (props) => {
    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItem}>
                <Dialog name='Alex' id='1'/>
                <Dialog name='Stas' id='2'/>
                <Dialog name='Luda' id='3'/>
                <Dialog name='Ivan' id='4'/>
            </div>
            <div className={css.messages}>
                <Message post='Hi'/>
                <Message post='Hello'/>
                <Message post='Yo'/>
                <Message post='How are you?'/>
            </div>
        </div>
    );
};
export default Dialogs;