import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ManageProductDetails = (props) => {
  const { name, releaseYear, price, _id } = props.mobile;
  const handelDeleteMobile = (id) => {
    console.log();
    fetch("https://pumpkin-crisp-19586.herokuapp.com/delete/"+id, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(result =>{
        console.log('delete Successfully');
    })
  };
  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{releaseYear}</td>
        <td>${price}</td>
        <td>
          <button className="btn btn-success"><FontAwesomeIcon icon={faEdit} /></button>|
          <button 
            onClick={() => handelDeleteMobile(_id)}
            className="btn btn-danger"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default ManageProductDetails;
