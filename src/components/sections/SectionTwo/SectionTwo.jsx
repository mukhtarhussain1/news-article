import React from "react";
import "./SectionTwo.css";

const SectionTwo = ({ Data }) => {
  return (
    <div className="sectionTwo-container">
      <ul>
        {Data.map((item) => (
          <li>
            <img alt={item.title} src={item.image}></img>
            <div className="title">{item.title}</div>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionTwo;
