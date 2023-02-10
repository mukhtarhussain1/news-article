import React from "react";
import "./SectionSix.css";

const SectionSix = ({ Data }) => {
  return (
    <div className="sectionSix-container">
      <div className="row">
        {Data.map((item, index) => (
          <div
            className="col-md-4 sectionSix-card"
            style={{
              flexDirection: index % 3 === 1 ? "column-reverse" : undefined,
            }}
          >
            <div>
              <img alt="img" src={item.image} />
            </div>
            <div className="sectionSix-card-content">
              <div className="title">{item.title}</div>
              <p>{item.text}</p>
              <span>{item.auther}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionSix;
