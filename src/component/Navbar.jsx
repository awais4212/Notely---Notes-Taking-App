import React from 'react'
import { FaNoteSticky } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <div className="logo-icon">
            <FaNoteSticky />
          </div>
          <span>Notely</span>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar