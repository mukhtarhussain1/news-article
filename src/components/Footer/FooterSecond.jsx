import React from "react";
import "./Footer.css";

const FooterSecond = () => {
  return (
    <div className="footer">
      <nav className="nav">
        <div className="footerSecond-container">
          <ul>
            <li>
              <a href="/">Magazine</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Press</a>
            </li>
            <li>
              <a href="/">sitemap</a>
            </li>
            <li>
              <a href="/">TS + CS</a>
            </li>
          </ul>
        </div>
      </nav>
      <hr className="pb-5" />
    </div>
  );
};

export default FooterSecond;
