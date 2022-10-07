import { React } from 'react';
import css from './Profile.module.css';


const Profile = () => {
    return (
        <div className={css.content}>
            <div>
                <img src='https://st.depositphotos.com/1010338/2099/i/450/depositphotos_20999943-stock-photo-chaise-lounge-and-umbrella-on.jpg' />
            </div>
            <div>
                <div className={css.avatar}>
                    <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Images-HD.png' />
                </div>
                ava + description
            </div>
            <div>
                My post
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>
    );
}

export default Profile;