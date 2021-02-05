import React, {useState} from 'react';
import {MenuItems} from './MenuItems';
import {Link} from 'react-router-dom';
import './Dropdown.css';

function Dropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index} onClick={closeMobileMenu}>
              <Link className={item.cName} to={item.path} >
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Dropdown;