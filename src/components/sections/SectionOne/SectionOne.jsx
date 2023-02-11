import React from "react";
import "./SectionOne.css";
import image1 from "../../../assets/images/image1.png";
import image2 from "../../../assets/images/image2.png";
import image3 from "../../../assets/images/image3.png";

const SectionOne = ({ Data }) => {
  return (
    <>
      {Data.map((item) => (
        <div className="row sectionOne-container" key={item.travel}>
          <div className="col-md-12 col-lg-6 sectionOne-left">
            <div className="sectionOne-left-part1">
              <div className="title">{item.travel}</div>
              <h6>{item.mainHeading}</h6>
              <p>{item.loram}</p>
              <span>{item.auther}</span>
            </div>
            <div className="sectionOne-left-part2">
              <img alt="img" src={image1}></img>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 sectionOne-right">
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 sectionOne-right-part1">
              <div>
                <div className="title">{item.dine}</div>
                <p>{item.loram}</p>
                <span>{item.auther}</span>
              </div>
              <div className="my-5">
                <div className="title">{item.dine}</div>
                <p>{item.phasellus}</p>
                <span>{item.auther}</span>
              </div>
              <div className="mb-3">
                <img alt="img" src={image2}></img>
              </div>
              <div>
                <div className="title">{item.openHouse}</div>
                <p>{item.meals}</p>
                <span>{item.auther}</span>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-12 col-xl-6 sectionOne-right-part2">
              <div className="mb-3">
                <img alt="img" src={image3}></img>
              </div>
              <div>
                <div className="title">{item.openHouse}</div>
                <p>{item.uae}</p>
                <span>{item.auther}</span>
              </div>
              <div>
                <div className="title">{item.dine}</div>
                <p>{item.worldExpo}</p>
                <span>{item.auther}</span>
              </div>
              <div>
                <div className="title">{item.dine}</div>
                <p>{item.meals}</p>
                <span>{item.auther}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SectionOne;
