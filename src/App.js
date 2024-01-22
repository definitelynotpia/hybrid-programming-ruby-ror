import logo from './cute_cat.gif';
import './App.css';
import Navbar from './components/Navbar.js';
import Content from './components/Content.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Content />
        <img src={logo} className='App-logo' alt='cute cat!' />
        <p>
          HENLO IT ME A <b>CATS!</b>
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          meow
        </a>
      </header>
    </div>
  );
}

export default App;
