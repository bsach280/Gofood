import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import Carousel from "../Components/Carousel";

const Home = () => {
  return (
    <div>
      <div>
        {" "}
        <Navbar />
      </div>
      <div>
        {" "}
        <Carousel />
      </div>
      <div className="flex overflow-x-auto">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
