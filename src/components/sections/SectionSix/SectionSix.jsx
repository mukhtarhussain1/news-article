import React from "react";
import "./SectionSix.css";
import image18 from "../../../assets/images/image18.png";
import image19 from "../../../assets/images/image19.png";
import image20 from "../../../assets/images/image20.png";

const SectionSix = () => {
  return (
    <div className="sectionSix-container">
      <div className="row">
        <div className="col-md-4 sectionSix-card">
          <div>
            <img alt="img" src={image18} />
          </div>
          <div className="sectionSix-card-content">
            <div className="title mt-4">Travel</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              in odio vel.
            </p>
            <span>U. R. Oliver</span>
          </div>
        </div>
        <div className="col-md-4 sectionSix-card">
          <div className="sectionSix-card-content">
            <div className="title">Travel</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              in odio vel.
            </p>
            <span>U. R. Oliver</span>
          </div>
          <div className="mt-4">
            <img alt="img" src={image20} />
          </div>
        </div>
        <div className="col-md-4 sectionSix-card">
          <div>
            <img alt="img" src={image19} />
          </div>
          <div className="sectionSix-card-content">
            <div className="title mt-4">Travel</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              in odio vel.
            </p>
            <span>U. R. Oliver</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
