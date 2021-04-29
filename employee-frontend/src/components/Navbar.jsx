import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <nav className="stroke">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">New Employee</Link></li>
        <li><Link to="/all">Employee List</Link></li>
      </ul>
    </nav>

  )
}

export default Navbar
