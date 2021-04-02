import React, { useEffect, useState } from "react";
import MobileData from "../MobileData/MobileData";
import "./Home.css";

const Home = () => {
  const [mobiles, setMobiles] = useState([]);
  useEffect(() => {
    fetch("https://pumpkin-crisp-19586.herokuapp.com/mobiles")
      .then((res) => res.json())
      .then((data) => setMobiles(data));
  }, []);
  return (
    <div className="full-body">
      <div className="row">
        <div className="input-group mb-5 d-flex justify-content-center mt-5">
          <input
            type="text"
            className="search-input"
            placeholder="search your mobile"
          />
          <button className="btn btn-outline-secondary">Search</button>
        </div>
        {mobiles.length === 0 && (
          <div className="mx-auto">
            <div
              className="spinner-border text-primary"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="visually-hidden"></span>
            </div>
          </div>
        )}
        {mobiles.map((mobile) => (
          <MobileData mobile={mobile} key={mobile._id}></MobileData>
        ))}
      </div>
    </div>
  );
};

export default Home;
