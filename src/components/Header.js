import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <nav>
      <ul>
        <li><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></li>
        <li><NavLink to="/portfolio" activeClassName="is-active" exact={true}>Portfolios</NavLink></li>
        <li><NavLink to="/contact" activeClassName="is-active">Contact</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
