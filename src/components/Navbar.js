import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const clickHandler = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink className="navbar-logo" onClick={closeMobileMenu} to="/">
            CARS
          </NavLink>
          <div className="menu-icon" onClick={clickHandler}>
            <i className={click ? "fas fa-times" : "fa fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/cars"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                All Cars
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/sign-up"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <button className="btn"> Sign up</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
