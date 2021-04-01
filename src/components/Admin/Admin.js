import React, { useState } from "react";
import AddProduct from "../AddProduct/AddProduct";
import ManageProduct from "../ManageProduct/ManageProduct";
import EditProduct from "../EditProduct/EditProduct";
import "./Admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faPlus, faThLarge } from "@fortawesome/free-solid-svg-icons";

const Admin = () => {
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(true);
  const [display3, setDisplay3] = useState(false);
  const handelManage = () => {
    setDisplay1(true);
    setDisplay2(false);
    setDisplay3(false);
  };
  const handelAdd = () => {
    setDisplay1(false);
    setDisplay2(true);
    setDisplay3(false);
  };
  const handelEdit = () => {
    setDisplay1(false);
    setDisplay2(false);
    setDisplay3(true);
  };
  return (
    <div className="mt-2 px-4">
      <div className="row">
        <div className="col-4 left-menu-full d-flex justify-content-center">
          <div className="">
            <div className="text-center mb-5 admin-title">
              <h1>Mobile Market</h1>
              <hr/>
            </div>
            <div className="left-menu">
              <h3 onClick={handelManage}><FontAwesomeIcon icon={faThLarge} /> Manage Product</h3>
              <h3 onClick={handelAdd}><FontAwesomeIcon icon={faPlus} /> Add Product</h3>
              <h3 onClick={handelEdit}><FontAwesomeIcon icon={faPen} /> Edit Product</h3>
            </div>
          </div>
        </div>
        <div className="col-8 p-0">
          {display1 ? (
            <div className="">
              <ManageProduct></ManageProduct>
            </div>
          ) : null}
          {display2 ? (
            <div className="">
              <AddProduct></AddProduct>
            </div>
          ) : null}
          {display3 ? (
            <div className="">
              <EditProduct></EditProduct>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Admin;
