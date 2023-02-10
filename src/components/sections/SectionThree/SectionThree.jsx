import React from "react";
import "./SectionThree.css";

const SectionThree = ({ Data1, Data2 }) => {
  return (
    <div className="sectionThree-container">
      {Data1.map((item) => (
        <div className="row part1">
          <div className="col-md-7">
            <img alt="img" src={item.image}></img>
          </div>
          <div className="col-md-5">
            <div className="title">{item.title}</div>
            <h6>{item.text}</h6>
            <p>{item.text2}</p>
            <span>{item.span}</span>
          </div>
        </div>
      ))}
      <div className="row part2">
        {Data2.map((item) => (
          <div className="col-md-4 part2-card">
            <div className="pe-4">
              <img alt="img" src={item.image}></img>
            </div>
            <div>
              <div className="title">{item.title}</div>
              <p>{item.text}</p>
              <p>{item.text2}</p>
              <span>{item.span}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionThree;
