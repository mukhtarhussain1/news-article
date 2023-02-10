import React from "react";
import "./SectionThree.css";
import { sectionThreeData } from "../../../data/common";
import image9 from "../../../assets/images/image9.png";

const SectionThree = () => {
  return (
    <div className="sectionThree-container">
      <div className="row part1">
        <div className="col-md-7">
          <img src={image9}></img>
        </div>
        <div className="col-md-5">
          <div className="title">Travel</div>
          <h6>
            Louvre Abu Dhabi marks 4th anniversary with world class exhibitions,
            programming for all
          </h6>
          <p>
            Exhin imlave asfear asfasas afsfeaarsa asfasfasf asfasfa ten
            cultable doice inverum
          </p>
          <span>Cvita Doleschall</span>
        </div>
      </div>
      <div className="row part2">
        {sectionThreeData.map((item) => (
          <div className="col-md-4 part2-card">
            <div className="pe-4">
              <img src={item.image}></img>
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
