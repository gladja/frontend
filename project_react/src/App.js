import logo from './logo.svg';
import './App.css';

const App = () => {
  return (

    <div className="App">
      <header className="App-header">
        <Header />
        <ul className="table">
          <li>Bob</li>
          <li>Alex</li>
          <li>Ivan</li>
        </ul>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <img src={logo} className="App-logo2" alt="logo" />
      </header>
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <a href='#s'>Home</a>
      <a href='#s'>News Feed</a>
      <a href='#s'>Messages</a>
    </div>
  );
}

export default App;
