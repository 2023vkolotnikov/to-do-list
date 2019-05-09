import React from 'react';
import '../App.css'

function Navbar() {

  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <p className="navbar-brand text-white nav-title">To Do List</p>
      <button className="btn btn-outline-success my-2 my-sm-0 login" type="submit">Log In</button>
    </nav>
  )
}
export default Navbar
