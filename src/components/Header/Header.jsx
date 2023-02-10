import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";
import { FaBars } from "react-icons/fa";
import { BsMoonFill } from "react-icons/bs";

const nav = document.querySelector(".main-header");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

const Header = ({ toggleTheme }) => {
  return (
    <div className="row main-header">
      <div className="col-4 main-header-section1">
        <FaBars className="menu-icon" />
        <h6>MENU</h6>
        <BsMoonFill onClick={toggleTheme} className="menu-icon" />
      </div>
      <div className="col-4 main-header-section2">
        <img alt="img" src={logo}></img>
      </div>
      <div className="col-4"></div>
    </div>
  );
};

export default Header;
