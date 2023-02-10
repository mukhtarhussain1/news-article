import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <div className="container">
          <ul>
            <li>
              <a href="/" className="current">
                News
              </a>
            </li>
            <li>
              <a href="/">Opinion</a>
            </li>
            <li>
              <a href="/">Life</a>
            </li>
            <li>
              <a href="/">Businuss</a>
            </li>
            <li>
              <a href="/">Magazine</a>
            </li>
            <li>
              <a href="/">Newsletter</a>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
