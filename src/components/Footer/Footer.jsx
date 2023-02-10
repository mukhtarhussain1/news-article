import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="row footer-container">
      <div className="col-md-6 footer-left-content">
        <div className="col-md-6 col-lg-4">
          <h4>News</h4>
          <ul>
            <li>
              <a href="/">Featured News</a>
            </li>
            <li>
              <a href="/">Latest News</a>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-4">
          <h4>Life</h4>
          <ul>
            <li>
              <a href="/">Latest News</a>
            </li>
            <li>
              <a href="/">Fashion</a>
            </li>
            <li>
              <a href="/">Dining</a>
            </li>
            <li>
              <a href="/">Recipes</a>
            </li>
            <li>
              <a href="/">Art & Culture</a>
            </li>
            <li>
              <a href="/">Travel</a>
            </li>
            <li>
              <a href="/">Motoring</a>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-lg-4">
          <h4>Business</h4>
          <ul>
            <li>
              <a href="/">Open House</a>
            </li>
            <li>
              <a href="/">What does that even mean?</a>
            </li>
            <li>
              <a href="/">Homegrown</a>
            </li>
            <li>
              <a href="/">How do I...</a>
            </li>
            <li>
              <a href="/">Bag off</a>
            </li>
            <li>
              <a href="/">Where to spend it</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-6 footer-right-content">
        <div className="col-sm-12 col-md-6 ">
          <h4>Subscribe</h4>
          <p>Get fresh updates about the fashion, beauty, trends</p>
          <div className="input-wraper">
            <input placeholder="Enter your email below" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
