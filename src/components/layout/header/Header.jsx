import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div>
            <NavLink  to="/">Home & Accessories </NavLink>
          </div>

          <div>
            <NavLink to="/products">Jewelry </NavLink>
          </div>
          <div>
            <NavLink to="/about">Love & Engagement </NavLink>
          </div>
          <div>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
