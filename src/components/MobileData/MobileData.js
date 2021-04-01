import React from "react";
import { Link } from "react-router-dom";
import './MobileData.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const MobileData = (props) => {
  const { name, imageUrl, price, _id} = props.mobile;
  return (
    <div className="col-md-4 d-flex justify-content-center">
      <div className="card card-style mb-3 border-0 shadow ">
          <img src={imageUrl} className="card-img-top p-4" alt="" />
          <div className="card-body">
            <h5 className="card-title"><Link to=''>{name}</Link></h5>
          </div>
          <div className="d-flex justify-content-between p-3">
              <h2>${price}</h2>
              <Link to={`/checkout/${_id}`}><button className="btn btn-success"><FontAwesomeIcon icon={faShoppingCart} /> Buy Now</button></Link>
          </div>
        </div>
    </div>
  );
};

export default MobileData;
