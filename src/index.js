import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router>
    <App />
  </Router>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// reportWebVitals();
