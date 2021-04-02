import React, { useEffect, useState } from "react";
import ManageProductDetails from "../ManageProductDetails/ManageProductDetails";
import "./ManageProduct.css";

const ManageProduct = () => {
  const [mobiles, setMobiles] = useState([]);
  useEffect(() => {
    fetch("https://pumpkin-crisp-19586.herokuapp.com/mobiles")
      .then((res) => res.json())
      .then((data) => setMobiles(data));
  }, []);
  return (
    <div className="full-manage-product-body">
      <h2 className="manage-product-heading">Manage Product</h2>
      <div className="">
        <div className="px-5">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Product Name</th>
                <th scope="col">Release Year</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            {mobiles.map((mobile) => (
              <ManageProductDetails
                mobile={mobile}
                key={mobile._id}
              ></ManageProductDetails>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
