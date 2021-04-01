import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { userContext } from "../../App";

const CheckOut = () => {
  const [loggedInUser] = useContext(userContext);
  const { id } = useParams();
  const [mobileData, setMobileData] = useState({});

    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    const dateAndTime = (year + "-" + month + "-" + date + " " + hours + ":" + minutes + " " + ampm );

  useEffect(() => {
    fetch(`https://pumpkin-crisp-19586.herokuapp.com/mobile/${id}`)
      .then((res) => res.json())
      .then((data) => setMobileData(data));
  }, [id]);


  const handelCheckout = () => {
    const newOrder = {...loggedInUser, dateAndTime, ...mobileData};
    fetch('https://pumpkin-crisp-19586.herokuapp.com/addOrder', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newOrder)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }

  return (
    <div className="mt-5">
      <h2>Check out</h2>
      <div className="">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Descriptions</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{mobileData.name}</td>
              <td>1</td>
              <td>${mobileData.price}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">Total:</td>
              <td>${mobileData.price}</td>
            </tr>
          </tfoot>
        </table>
        <div className="d-flex justify-content-center">
          <Link to={`/orderProcess/${mobileData._id}`}><button onClick={handelCheckout} className="mr-5 btn btn-success"><FontAwesomeIcon icon={faShoppingBasket} /> Checkout</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
