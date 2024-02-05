import './App.css';
import Navbar from './components/Navbar.js';
import Content from './components/Content.js';
import SignIn from './components/SignIn.js';
import SignUp from './components/SignUp.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
      </header>

      {/* <header className="App-header">
        <Navbar />
        <Content />
        <img src={logo} className='App-logo' alt='cute cat!' />
        <p>
          HENLO IT ME A <b>CATS!</b>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          meow
        </a>
      </header> */}

    </div>
  );
}

// function App() {

//   const login = (username, password) => {
//     //
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <Navbar />
//         <Content />
//         <img src={logo} className='App-logo' alt='cute cat!' />
//         <p>
//           HENLO IT ME A <b>CATS!</b>
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           meow
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
