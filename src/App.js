import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import fire from './fire.js'
import Login from './components/login'

function App() {
    return (
      <div>
        <Navbar/>
        <Login/>
      </div>
    )
}

export default App;
