import React from "react";
import Banner from "../Banner/Banner";
import HomeSection from "../HomeSection/HomeSection";
import SmartPhones from "../SmartPhones/SmartPhones";
import SmartWatch from "../SmartWatch/SmartWatch";
import Report from "../Report/Report";
import Tablet from "../Tablet/Tablet";
import useTitle from "../../../UseHooks/UseTitle/UseTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <HomeSection></HomeSection>

      <h2 className="text-5xl font-semibold mt-10 mb-5 text-center">
        Categories
      </h2>
      <div className="divider"></div>
      <h2 className="text-4xl font-bold mt-5">Smart Phones</h2>
      <div className="divider"></div>
      <SmartPhones></SmartPhones>

      <div className="divider"></div>
      <h2 className="text-4xl font-bold mt-5">Tablets</h2>
      <div className="divider"></div>
      <Tablet></Tablet>

      <div className="divider"></div>
      <h2 className="text-4xl font-bold mt-5">Smart Watch</h2>
      <div className="divider"></div>
      <SmartWatch></SmartWatch>

      <Report></Report>
    </div>
  );
};

export default Home;
