import React from "react";
import "./SectionSeven.css";
import image21 from "../../../assets/images/image21.png";
const SectionSeven = () => {
  return (
    <div className="row sectionSeven-container">
      <div className="col-md-4 sectionSeven-part1">
        <div className="title">Half full</div>
        <h6>
          Louvre Abu Dhabi marks 4th anniversary with world class exhibition
          Louvre Abu Dhabi marks 4th
        </h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in
          odio vel.
        </p>
      </div>
      <div className="col-md-4 sectionSeven-part2">
        <div className="title">One story, two perspectives</div>
        <div>
          <img src={image21} />
        </div>
      </div>
      <div className="col-md-4 sectionSeven-part3">
        <div className="title">Half empty</div>
        <h6>
          Louvre Abu Dhabi marks 4th anniversary with world class exhibition
          Louvre Abu Dhabi marks 4th
        </h6>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in
          odio vel.
        </p>
      </div>
    </div>
  );
};

export default SectionSeven;
