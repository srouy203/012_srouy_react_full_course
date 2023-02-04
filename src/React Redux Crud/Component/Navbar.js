import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <div className="navbar-contain container">
                <Link to='/'>
                    React Redux Crud
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar
