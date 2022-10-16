import {React} from 'react';
import Post from './Post/Post';
import css from './MyPosts.module.css';

// let postData = [
//     {id: 1, message: 'Hi, how are you?', likeCount: 10},
//     {id: 2, message: 'Fine and you?', likeCount: 12},
//     {id: 3, message: 'YO', likeCount: 1},
// ]; так не правильно держать здесь данные переносим их выше в profile.js

const MyPosts = (props) => {
    let postsElements = props.postData.map((data) => <Post message={data.message} likeCount={data.likeCount} />);

    return (
        <div className={css.title}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={css.posts}>
                {postsElements}
                {/*<Post message={postData[0].message} likeCount={postData[0].likeCount} />*/}
                {/*<Post message={postData[1].message} likeCount={postData[1].likeCount} />*/}
                {/*<Post/>*/}
            </div>
        </div>
    );
}

export default MyPosts;