import React from "react";
import css from './Friend.css';

const Friend = (props) => {
    return (
        <div className={css.item}>
            <div className='avatar'>
                <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Images-HD.png' alt='avatar'/>
            </div>
            <div className={css.name}>
                {props.name}
            </div>
        </div>
    );
};

export default Friend;