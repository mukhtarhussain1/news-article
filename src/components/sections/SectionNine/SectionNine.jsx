import React from "react";
import "./SectionNine.css";

const SectionNine = ({ Data1, Data2 }) => {
  return (
    <div className="sectionNine-container">
      <div className="row part2">
        {Data1.map((item) => (
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

export default SectionNine;
