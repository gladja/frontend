import Header from "./Header/Header";
import Main from "./Main/Main";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";

import './App.css';

function App() {
  return (
    <div className='wrapper'>
        <div className='header__item'><Header /></div>
        <div className='main__item'><Main /></div>
        <div className='nav__item'><Nav /></div>
        <div className='footer__item'><Footer /></div>
    </div>
  );
}

export default App;
