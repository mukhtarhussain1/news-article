import React from "react";
import "./Footer.css";

const Footer = ({ Data }) => {
  return (
    <>
      {Data.map((item) => (
        <div className="row footer-container">
          <div className="col-md-6 footer-left-content">
            <div className="col-md-6 col-lg-4">
              <h4>{item.news.title}</h4>
              <ul>
                <li>
                  <a href="/">{item.news.featured}</a>
                </li>
                <li>
                  <a href="/">{item.news.latest}</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4">
              <h4>{item.life.title}</h4>
              <ul>
                <li>
                  <a href="/">{item.life.latest}</a>
                </li>
                <li>
                  <a href="/">{item.life.fashion}</a>
                </li>
                <li>
                  <a href="/">{item.life.dining}</a>
                </li>
                <li>
                  <a href="/">{item.life.recipes}</a>
                </li>
                <li>
                  <a href="/">{item.life.artCulture}</a>
                </li>
                <li>
                  <a href="/">{item.life.travel}</a>
                </li>
                <li>
                  <a href="/">{item.life.motoring}</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4">
              <h4>{item.business.title}</h4>
              <ul>
                <li>
                  <a href="/">{item.business.openHouse}</a>
                </li>
                <li>
                  <a href="/">{item.business.whatDoesThatEvenMean}</a>
                </li>
                <li>
                  <a href="/">{item.business.homegrown}</a>
                </li>
                <li>
                  <a href="/">{item.business.howDoI}</a>
                </li>
                <li>
                  <a href="/">{item.business.bagOff}</a>
                </li>
                <li>
                  <a href="/">{item.business.whereToSpendIt}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 footer-right-content">
            <div className="col-sm-12 col-md-6 ">
              <h4>{item.contact.subscribe}</h4>
              <p>{item.contact.getUpdates}</p>
              <div className="input-wraper">
                <input placeholder="Enter your email below" />
                <button>{item.contact.submit}</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Footer;
