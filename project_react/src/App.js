import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// let postData = [
//   {id: 1, message: 'Hi, how are you?', likeCount: 10},
//   {id: 2, message: 'Fine and you?', likeCount: 12},
//   {id: 3, message: 'YO', likeCount: 1},
// ]; переносим данный выше в index.js

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar friends={props.state.sidebar.friends} />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile'
                   element={<Profile postData={props.state.profilePage.postData} />} />
            <Route path='/dialogs'
                   element={<Dialogs dialogsData={props.state.dialogsPage.dialogsData}
                                     messagesData={props.state.dialogsPage.messagesData}/>} />
            <Route path='*' />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;