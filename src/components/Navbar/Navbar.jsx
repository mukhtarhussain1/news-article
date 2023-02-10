import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav class="nav">
        <div class="container">
          <ul>
            <li>
              <a href="javascript:void(0);" class="current">
                News
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">Opinion</a>
            </li>
            <li>
              <a href="javascript:void(0);">Life</a>
            </li>
            <li>
              <a href="javascript:void(0);">Businuss</a>
            </li>
            <li>
              <a href="javascript:void(0);">Magazine</a>
            </li>
            <li>
              <a href="javascript:void(0);">Newsletter</a>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
