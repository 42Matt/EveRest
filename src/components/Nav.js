import React from 'react';
import { NavLink } from 'react-router-dom';
import 'styles/Nav.css';
import logo from 'images/eve-rest-logo-ss.png';
import loginIcon from 'images/user.png';

const Nav = () => {
  return (
    <>
      <nav>
        <div className="img-container">
          <NavLink to="/" exact>
            <img src={logo} alt="logo firmy" />
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink to="/" exact>
              Eve-Rest
            </NavLink>
          </li>
          <li>
            <NavLink to="/maps">Mapa</NavLink>
          </li>
          <li>
            <NavLink to="/search">Wyszukiwarka</NavLink>
          </li>
          <li>
            <NavLink to="/get">Nasze restauracje</NavLink>
          </li>
          <li>
            <NavLink to="/post">Dodaj restaurację</NavLink>
          </li>
          <li>
            <NavLink to="/login" className="login-icon">
              <img src={loginIcon} alt="login icon" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
