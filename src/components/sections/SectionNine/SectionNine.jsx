import React from "react";
import "./SectionNine.css";
import { sectionNineData1, sectionNineData2 } from "../../../data/common";

const SectionNine = () => {
  return (
    <div className="sectionNine-container">
      <div className="row part2">
        {sectionNineData1.map((item) => (
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
      <div className="row part2">
        {sectionNineData2.map((item) => (
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

export default SectionNine;
