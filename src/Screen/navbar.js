import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
function Navbar() {
  const [click, setClick]=useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div>
      <div className="navbar">
        <div className="navbar-container">
          <Link to='/' className='navbar-logo' onClick={handleClick}>LS Music</Link>
        
          <div className="navbar-icon">
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} onClick={handleClick}></i>
          </div>

          <ul className={click ? 'navbar-menu active':'navbar-menu'}>
            <li className='Navbar-item'>
              <Link to='/' className='nav-link' onClick={handleClick}>Home</Link>
            </li>
            <li className='Navbar-item'>
              <Link to='/about' className='nav-link' onClick={handleClick}>About</Link>
            </li>
            <li className='Navbar-item'>
              <Link to='/product' className='nav-link' onClick={handleClick}>Product</Link>
            </li>
            <li className='Navbar-item'>
              <Link to='/news' className='nav-link' onClick={handleClick}>News</Link>
            </li>
            <li className='Navbar-item'>
              <Link to='/contact' className='nav-link' onClick={handleClick}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>


    </div>
  )
}

export default Navbar;
