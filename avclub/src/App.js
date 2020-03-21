import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search.js';

function App() {
  return (
    <div className="App">
      <Search />
      <a href='http://localhost:8888'> Login to Spotify </a>
    </div>
  );
}

export default App;
