import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>    
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
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