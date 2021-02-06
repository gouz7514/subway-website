import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const onMouseEnter = () => {
  //   if (window.innerWidth <= 960) {
  //     setDropdown(true);
  //   } else {
  //     setDropdown(true);
  //   }
  // };

  // const onMouseLeave = () => {
  //   if (window.innerWidth <= 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // };

  const handleDropClick = (e) => {
    if(!e.target.closest('.nav-dropdown') && dropdown) {
      setDropdown(false);
    }
  };

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  const onDropClick = () => {
    const x = document.querySelector('.dropdown-menu');
    console.log(x.classList);
    x.classList.toggle('active');
  }
  
  useEffect(() => {
    showButton()
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleDropClick);
    return () => {
      document.removeEventListener('click', handleDropClick);
    };
  });

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/subway-website/" className="navbar-logo" onClick={closeMobileMenu}>
            어케했Sub
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times': 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/subway-website/' className='nav-links' onClick={closeMobileMenu}>
                이용 방법
              </Link>
            </li>
            {/* <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> */}
            <li className='nav-item' >
              {/* <div className='nav-links nav-dropdown' onClick={() => setDropdown(dropdown => !dropdown)}> */}
              <div className='nav-links nav-dropdown' onClick={onDropClick}>
                재료 소개 <i className='fas fa-caret-down' />
                <Dropdown />
              </div>
              {/* <Dropdown /> */}
              {/* {dropdown && <Dropdown />} */}
            </li>
            <li className='nav-item'>
              <Link to='/subway-website/combinations' className='nav-links' onClick={closeMobileMenu}>
                꿀 조합
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/subway-website/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  )
};

export default Navbar;
