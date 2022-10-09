import { React } from 'react';
import css from './Post.module.css';

const Post = (props) => {
    return (
        <div className={css.item}>
            <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Images-HD.png' alt='avatar' />
            {props.message}
            <div>
                Like:
                <span>{props.likeCount}</span>
            </div>
        </div>
    );
}

export default Post;
