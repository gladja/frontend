import React from "react";
import css from './Dialogs.module.css';
import Dialog from './DialogItem/DialogsItem';
import Message from "./Message/Message";


// let dialogsData = [
//     {id: 1, name: 'Alex'},
//     {id: 2, name: 'Stas'},
//     {id: 3, name: 'Luda'},
//     {id: 4, name: 'Ivan'},
// ];
//
// let messagesData = [
//     {id: 1, message: 'Hi'},
//     {id: 2, message: 'Yo'},
//     {id: 3, message: 'Hello'},
//     {id: 4, message: 'How are you?'},
// ];


const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map((data) => <Dialog name={data.name} id={data.id} avatar={data.avatar}/> );
    let messagesElements = props.messagesData.map((data) => <Message message={data.message} id={data.id} />);

    return (
        <div className={css.dialogs}>
            <div className={css.userName}>
                <div className={css.avatar}>
                    {/*{avatarElements}*/}
                </div>
                <div className={css.dialogsItem}>
                    {dialogsElements}
                    {/*<Dialog name={dialogsData[0].name} id={dialogsData[0].id} />*/}
                    {/*<Dialog name='Stas' id='2'/>*/}
                    {/*<Dialog name='Luda' id='3'/>*/}
                    {/*<Dialog name='Ivan' id='4'/>*/}
                </div>
            </div>
            <div className={css.messages}>
                {messagesElements}
                {/*<Message message={messagesData[0].message} id={messagesData[0].id} />*/}
                {/*<Message message='Yo'/>*/}
                {/*<Message message='Hello'/>*/}
                {/*<Message message='How are you?'/>*/}
            </div>
        </div>
    );
};
export default Dialogs;