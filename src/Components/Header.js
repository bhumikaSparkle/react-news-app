import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className="container">
            <div className="navbar-wrapper">
              <Link className="navbar-brand" to="/">
                My News App
              </Link>
              <div className="navbar">
                <ul className="navbar-menu">
                  <li className="menu-item">
                    <NavLink activeclassname="active" to="/"> All</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink activeclassname="active" to="/business"> Business</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink activeclassname="active" to="/entertainment"> Entertainment</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink activeclassname="active" to="/health"> Health</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink activeclassname="active" to="/science"> Science</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink  activeclassname="active" to="/sports"> Sports</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink activeclassname="active" to="/technology"> Technology</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
