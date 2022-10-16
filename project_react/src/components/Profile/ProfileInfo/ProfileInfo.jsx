import {React} from 'react';
import css from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img
                    src='https://st.depositphotos.com/1010338/2099/i/450/depositphotos_20999943-stock-photo-chaise-lounge-and-umbrella-on.jpg'
                    alt='img'/>
            </div>
            <div className={css.userBlock}>
                <div className={css.avatar}>
                    <img src='https://www.pngall.com/wp-content/uploads/12/Avatar-PNG-Images-HD.png' alt='avatar'/>
                </div>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;