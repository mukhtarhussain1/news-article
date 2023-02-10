import React from "react";
import { sectionEightData } from "../../../data/common";
import "./SectionEight.css";

const SectionEight = () => {
  return (
    <div class="sectionFour-container">
      <ul>
        {sectionEightData.map((item) => (
          <li>
            <img src={item.image}></img>
            <div className="title">{item.title}</div>
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionEight;
