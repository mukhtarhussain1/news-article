import React from "react";
import "./SectionTen.css";

const SectionTen = ({ Data }) => {
  return (
    <div className="sectionTen-container">
      <div className="row">
        {Data.map((item) => (
          <div className="col-md-4 sectionTen-card">
            <div>
              <img src={item.image} />
            </div>
            <div className="sectionTen-card-content">
              <div className="title mt-4">{item.title}</div>
              <p>{item.text}</p>
              <span>{item.auther}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionTen;
