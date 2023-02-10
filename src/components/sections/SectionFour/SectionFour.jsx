import React from "react";
import "./SectionFour.css";
const SectionFour = ({ Data }) => {
  return (
    <div class="sectionFour-container">
      <ul>
        {Data.map((item) => (
          <li>
            <figure>
              <img className="image" src={item.image}></img>
              <figcaption>
                <div className={item.ratings ? "title" : ""}>
                  {item.ratings}
                </div>
              </figcaption>
            </figure>

            <div className="title">{item.title}</div>
            <p>{item.text}</p>
            <span>{item.auther}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionFour;
