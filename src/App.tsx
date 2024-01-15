import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <NavBar/>
      </Router>

    </div>
  );
}

export default App;
