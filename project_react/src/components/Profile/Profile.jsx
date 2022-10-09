import {React} from 'react';
import css from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src='https://st.depositphotos.com/1010338/2099/i/450/depositphotos_20999943-stock-photo-chaise-lounge-and-umbrella-on.jpg'
                    alt='img'/>
            </div>
            <div>
                <div className={css.avatar}>
                    <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Images-HD.png' alt='avatar'/>
                </div>
                ava + description
            </div>
            <div>
                <MyPosts/>
            </div>
        </div>
    );
}

export default Profile;

