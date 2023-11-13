import { Outlet, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div>
            <NavLink to="/">
              {" "}
              <h5>Home & Accessories</h5>{" "}
            </NavLink>
          </div>

          <div>
            <NavLink to="/products">
              {" "}
              <h5>Jewelry</h5>{" "}
            </NavLink>
          </div>
          <div>
            <NavLink to="/about">
              {" "}
              <h5>Love & Engagement</h5>{" "}
            </NavLink>
          </div>
          <div>
            <NavLink to="/contact">
              <h5>Contact</h5>
            </NavLink>
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
