import React from "react";
import Phones from "./Phones";
import img1 from "../../../assets/images/Phones/iphone.jpg";
import img2 from "../../../assets/images/Phones/pixel.jpg";
import img3 from "../../../assets/images/Phones/samsung.jpg";
import { Link } from "react-router-dom";

const SmartPhones = () => {
  const phonesData = [
    {
      _id: 1,
      img: img1,
      name: "Iphone",
    },
    {
      _id: 2,
      img: img2,
      name: "Pixel",
    },
    {
      _id: 3,
      img: img3,
      name: "Samsung",
    },
  ];
  return (
    <div>
      <div className=" mt-5 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {phonesData.map((phoneData) => (
          <Phones key={phoneData._id} phoneData={phoneData}></Phones>
        ))}
      </div>
      <div style={{ marginLeft: "600px" }}>
        <Link to="/appointment" className="mt-10 mb-5 btn btn-primary">
          Explore Available Phone
        </Link>
      </div>
    </div>
  );
};

export default SmartPhones;
