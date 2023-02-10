import React from "react";
import "./SectionFive.css";

const SectionFive = ({ Data }) => {
  return (
    <>
      {Data.map((item) => (
        <div className="sectionFive-container">
          <div className="title sectionFive-title">{item.title}</div>
          <div className="sectionFive-content">
            <p>{item.text1}</p>
            <h6>{item.text2}</h6>
            <h6>{item.text3}</h6>
            <h6>{item.text4}</h6>
            <span>{item.auther}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default SectionFive;
