import React, { useState, useEffect } from "react";
import "./Ocean.scss";
import { Link } from "react-router-dom";
import "../fishCss/fish.css";
import FishOcean from "components/basace/FishOcean";

const Ocean = () => {
  return (
    <div className="bgi">
      <div className="bubble bubble--1"></div>
      <div className="bubble bubble--2"></div>
      <div className="bubble bubble--3"></div>
      <div className="bubble bubble--4"></div>
      <div className="bubble bubble--5"></div>
      <div className="bubble bubble--6"></div>
      <div className="bubble bubble--7"></div>
      <div className="bubble bubble--8"></div>
      <div className="bubble bubble--9"></div>
      <div className="bubble bubble--10"></div>
      <div className="bubble bubble--11"></div>
      <div className="bubble bubble--12"></div>
      <div id="octocat"></div> <FishOcean />
    </div>
  );
};

export default Ocean;
