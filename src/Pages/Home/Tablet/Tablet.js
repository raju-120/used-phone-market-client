import React from "react";
import TabItem from "./TabItem";
import img1 from "../../../assets/images/Tablet/ipad.jpg";
import img2 from "../../../assets/images/Tablet/Samsung.jpg";
import img3 from "../../../assets/images/Tablet/surface.jpeg";
import { Link } from "react-router-dom";

const Tablet = () => {
  const tabData = [
    {
      _id: 1,
      img: img1,
      name: "Apple iPad 10G",
    },

    {
      _id: 2,
      img: img2,
      name: "Samsung Tab S8",
    },
    {
      _id: 3,
      img: img3,
      name: "Microsoft Surface GO 3",
    },
  ];
  return (
    <div>
      <div className="grid gap-10  grid-col-1 md:grid-cols-2 lg:grid-cols-3">
        {tabData.map((tab) => (
          <TabItem key={tab._id} tab={tab}></TabItem>
        ))}
      </div>
      <div className="text-center mt-10 mb-5">
        <Link to="/appointmenttab" className="btn btn-primary">
          {" "}
          Explore Available Tablets
        </Link>
      </div>
    </div>
  );
};

export default Tablet;
