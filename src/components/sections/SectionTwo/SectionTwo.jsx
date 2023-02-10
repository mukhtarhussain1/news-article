import React from "react";
import { sectionTwoData } from "../../../data/common";
import "./SectionTwo.css";

const SectionTwo = () => {
  return (
    <div class="sectionTwo-container">
      <ul>
        {sectionTwoData.map((item) => (
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
