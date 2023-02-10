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
  sectionTwoData,
  sectionThreeData2,
  sectionThreeData1,
  sectionFourData,
  sectionFiveData,
  sectionEightData,
  sectionNineData1,
  sectionNineData2,
  sectionTenData,
} from "../data/common";

const Homepage = ({ toggleTheme }) => {
  return (
    <div>
      <Header toggleTheme={toggleTheme} />
      <Navbar />
      <SectionOne Data={sectionOneData} />
      <SectionTwo Data={sectionTwoData} />
      <SectionThree Data1={sectionThreeData1} Data2={sectionThreeData2} />
      <SectionFour Data={sectionFourData} />
      <SectionFive Data={sectionFiveData} />
      <SectionSix />
      <SectionSeven />
      <SectionFour Data={sectionEightData} />
      <SectionNine Data1={sectionNineData1} Data2={sectionNineData2} />
      <SectionTen Data={sectionTenData} />
      <hr />
      <Footer />
      <FooterSecond />
    </div>
  );
};

export default Homepage;
