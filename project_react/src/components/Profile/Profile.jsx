import {React} from 'react';
import css from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

// let postData = [
//      {id: 1, message: 'Hi, how are you?', likeCount: 10},
//      {id: 2, message: 'Fine and you?', likeCount: 12},
//      {id: 3, message: 'YO', likeCount: 1},
//  ]; переносим данный выше в app.js

const Profile = (props) => {
    return (
        <div>
            <div>
                <ProfileInfo />
                <MyPosts {...props} />
                {/*можно 2 способами*/}
                {/*<MyPosts postData={props.postData} />*/}
            </div>
        </div>
    );
}

export default Profile;
