import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>    
        <nav>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/products'>Products</NavLink>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>

          </ul>
        </nav>
      </header>

      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default Header;