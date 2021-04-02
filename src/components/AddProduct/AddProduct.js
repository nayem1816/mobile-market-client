import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddProduct.css";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const [imageUrl, setImageURL] = useState([]);
  const onSubmit = (data) => {
    const mobileData = {
      name: data.name,
      releaseYear: data.releaseYear,
      price: data.price,
      imageUrl: imageUrl,
    };

    const url = `https://pumpkin-crisp-19586.herokuapp.com/addMobile`;
    // console.log(mobileData);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mobileData),
    }).then((res) => console.log("server res successfully", res));
    alert('Your Product Added Successfully')
  };

  const handelUploadImage = (event) => {
    // console.log(event.target.files[0]);
    const imgData = new FormData();
    imgData.set("key", "94e8e908997cb2f7fead68d619169951");
    imgData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then(function (response) {
        // console.log(response.data.data.display_url);
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="add-product-full">
      <h2 className="add-product-heading">Add Product</h2>
      <div className="d-flex justify-content-center">
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row input-data-part">
              <div className="col-md-6">
                <h4>Product Name</h4>
                <input className="input-style" name="name" placeholder="mobile name" ref={register} />
                <h4 className="mt-5">Release Year</h4>
                <input className="input-style"
                  name="releaseYear"
                  placeholder="release year"
                  ref={register}
                />
              </div>
              <div className="col-md-6">
                <h4>Add Price</h4>
                <input className="input-style" name="price" placeholder="price" ref={register} />
                <h4 className="mt-5">Add Photo</h4>
                <input className="file-input-style mt-3"
                  name="photo"
                  onChange={handelUploadImage}
                  type="file"
                  ref={register({ required: true })}
                />
              </div>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <input className="btn add-btn-style px-5" type="submit" value="Add" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
