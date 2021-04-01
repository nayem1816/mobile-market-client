import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const OrderProcess = () => {
  const { id } = useParams();
  const [mobileData, setMobileData] = useState({});
  useEffect(() => {
    fetch(`https://pumpkin-crisp-19586.herokuapp.com/mobile/${id}`)
      .then((res) => res.json())
      .then((data) => setMobileData(data));
  }, [id]);
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="text-center">
        <h3>Your product <span style={{color:'green'}}>{mobileData.name}</span> ordered has been successfully.</h3>
        <h4>Total Price: ${mobileData.price}</h4>
        <h4>Order Status: pending</h4>
        <h4>Thank You..</h4>
      </div>
    </div>
  );
};

export default OrderProcess;
