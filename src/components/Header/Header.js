import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import './Header.css'

const Header = () => {
  const [loggedInUser] = useContext(userContext);
  return (
    <div className="full-header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><h2 className="text-light">Mobile Market</h2></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mobile-menu-style justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/home"><h5 className="text-light mr-4 mt-2">Home</h5></Link>
              <Link className="nav-link" to="/orders"><h5 className="text-light mr-4 mt-2">Orders</h5></Link>
              <Link className="nav-link" to="/admin"><h5 className="text-light mr-4 mt-2">Admin</h5></Link>
              <Link className="nav-link" to="/deals"><h5 className="text-light mr-4 mt-2">Deals</h5></Link>
              {loggedInUser.name ? (
                  <Link to="/" className="nav-link">
                    <img className="image-style" src={loggedInUser.photoURL} alt=""/>
                  </Link>
                ) : (
                  <Link to="/login">
                    <button className="btn login-btn-style"><h5 className="text-light mt-2">Login</h5></button>
                  </Link>
                )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
