import { React } from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div className={css.title}>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={css.posts}>
                <Post message='Hi, haw are you' likeCount='10' />
                <Post message='Fine and you' likeCount='10' />
                <Post />
            </div>
        </div>

    );
}

export default MyPosts;