import React from "react";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import SectionOne from "./sections/SectionOne/SectionOne";
import SectionTwo from "./sections/SectionTwo/SectionTwo";
import SectionThree from "./sections/SectionThree/SectionThree";
import SectionFour from "./sections/SectionFour/SectionFour";
import SectionFive from "./sections/SectionFive/SectionFive";
import SectionSix from "./sections/SectionSix/SectionSix";
import SectionSeven from "./sections/SectionSeven/SectionSeven";
import SectionNine from "./sections/SectionNine/SectionNine";
import SectionTen from "./sections/SectionTen/SectionTen";
import Footer from "./Footer/Footer";
import FooterSecond from "./Footer/FooterSecond";

import {
  sectionOneData,
  sectionFourData,
  sectionSixData,
  sectionEightData,
  sectionTenData,
} from "../data/common";

const Homepage = ({ toggleTheme }) => {
  return (
    <div>
      <Header toggleTheme={toggleTheme} />
      <Navbar />
      <SectionOne Data={sectionOneData} />
      <SectionTwo />
      <SectionThree />
      <SectionFour Data={sectionFourData} />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      {/* reusing the same component  */}
      <SectionFour Data={sectionEightData} />
      <SectionNine />
      <SectionTen Data={sectionTenData} />
      <hr />
      <Footer />
      <FooterSecond />
    </div>
  );
};

export default Homepage;
