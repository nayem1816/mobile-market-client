import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import OrdersBody from "../OrdersBody/OrdersBody";

const Orders = () => {
  const [loggedInUser] = useContext(userContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://pumpkin-crisp-19586.herokuapp.com/orders?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [loggedInUser.email]);
  return (
    <div className="mt-5">
      <h2 className="text-center">Your All Orders</h2>
      <h2>Total Orders: {orders.length}</h2>
      <h2 className="">Name: {loggedInUser.name}</h2>
      <h2 className="">Email: {loggedInUser.email}</h2>
      <div className=" mt-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Product Name</th>
              <th scope="col">Order Date & Time</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          {orders.map((order) => (
            <OrdersBody order={order} key={order._id}></OrdersBody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Orders;
