import React from "react";
import "./SectionFour.css";
import { AiFillStar } from "react-icons/ai";
const SectionFour = ({ Data }) => {
  return (
    <div className="sectionFour-container">
      <ul>
        {Data.map((item) => (
          <li>
            <figure>
              <img alt="img" className="image" src={item.image}></img>
              <figcaption>
                <div className={item.ratings ? "title" : "hidefigcaption"}>
                  <AiFillStar className="menu-icon" />
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
