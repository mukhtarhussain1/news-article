import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="row footer-container">
      <div className="col-md-6 footer-left-content">
        <div className="col-4">
          <h4>News</h4>
          <ul>
            <li>
              <a href="javascript:void(0);">Featured News</a>
            </li>
            <li>
              <a href="javascript:void(0);">Latest News</a>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h4>Life</h4>
          <ul>
            <li>
              <a href="javascript:void(0);">Latest News</a>
            </li>
            <li>
              <a href="javascript:void(0);">Fashion</a>
            </li>
            <li>
              <a href="javascript:void(0);">Dining</a>
            </li>
            <li>
              <a href="javascript:void(0);">Recipes</a>
            </li>
            <li>
              <a href="javascript:void(0);">Art & Culture</a>
            </li>
            <li>
              <a href="javascript:void(0);">Travel</a>
            </li>
            <li>
              <a href="javascript:void(0);">Motoring</a>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <h4>Business</h4>
          <ul>
            <li>
              <a href="javascript:void(0);">Open House</a>
            </li>
            <li>
              <a href="javascript:void(0);">What does that even mean?</a>
            </li>
            <li>
              <a href="javascript:void(0);">Homegrown</a>
            </li>
            <li>
              <a href="javascript:void(0);">How do I...</a>
            </li>
            <li>
              <a href="javascript:void(0);">Bag off</a>
            </li>
            <li>
              <a href="javascript:void(0);">Where to spend it</a>
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
