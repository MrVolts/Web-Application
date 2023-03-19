import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import '../css/aHome.css';

const Menu = ({ isOpen, toggleMenu, menuItems = [] }) => {
    return (
      <div className={`hamburger-menu${isOpen ? " open" : ""}`}>
        <ul>
          {menuItems.map((item, index) => (
            <Link key={index} to={item.link} onClick={toggleMenu}>
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
        <span className="close" onClick={toggleMenu}>&times;</span>
      </div>
    );
  };
  

const Hamburger = ({ menuItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <button className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <AiOutlineClose />: <AiOutlineMenu />}
      </button>
      <Menu isOpen={menuOpen} toggleMenu={toggleMenu} menuItems={menuItems} />
    </>
  );
};

export default Hamburger;
