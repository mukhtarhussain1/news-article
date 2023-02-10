import React from "react";
import "./SectionSeven.css";
const SectionSeven = ({ Data }) => {
  return (
    <div className="row sectionSeven-container">
      {Data.map((item) => (
        <>
          <div className="col-md-4 sectionSeven-part1">
            <div className="title">{item.title1}</div>
            <h6>{item.text1}</h6>
            <p>{item.text2}</p>
          </div>
          <div className="col-md-4 sectionSeven-part2">
            <div className="title">{item.title2}</div>
            <div>
              <img alt="img" src={item.image} />
            </div>
          </div>
          <div className="col-md-4 sectionSeven-part3">
            <div className="title title-inverted">{item.title3}</div>
            <h6>{item.text1}</h6>
            <p>{item.text2}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default SectionSeven;
