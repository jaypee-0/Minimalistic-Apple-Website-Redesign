import React from 'react';
import '../Styles/Navbar.scss';
import { useState } from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div id='Navbar' className='py-3 d-flex navbar-container'>
      <div className='container d-flex py-4 py-md-0'>
        <span className='navbar-logo' onClick={closeMobileMenu}>
          <Link to='/'>
            <span className='py-2 px-3'>
              <img src={logo} alt='logo.png' />
            </span>
          </Link>
        </span>

        <div className='menu-icon' onClick={handleClick}>
          <FA icon={click ? 'times' : 'bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/product-info'>
              <span className='nav-links' onClick={closeMobileMenu}>
                Product Information
              </span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/'>
              <span className='nav-links' onClick={closeMobileMenu}>
                Customer Support
              </span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/'>
              <span className='nav-links' onClick={closeMobileMenu}>
                Technology & Research
              </span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/'>
              <span className='nav-links' onClick={closeMobileMenu}>
                Groups & Interests
              </span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/'>
              <span className='nav-links' onClick={closeMobileMenu}>
                About Us
              </span>
            </Link>
          </li>
        </ul>
          <li className='nav-item d-none d-md-flex ms-auto '>
            <span className='nav-links search' onClick={closeMobileMenu}>
              <FA icon='fa-search' />
            </span>
          </li>
      </div>
    </div>
  );
};

export default Navbar;
