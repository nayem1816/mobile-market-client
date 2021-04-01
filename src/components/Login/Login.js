import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./config";
import { userContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Login = () => {
  const [LoggedInUser,setLoggedInUser] = useContext(userContext);
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handelLoginBtn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = { name: displayName, email, photoURL };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="mt-5" style={{ textAlign: "center" }}>
      <h1>Sign In</h1>
      <button onClick={handelLoginBtn} style={{fontSize:'30px', padding:'10px'}} className="btn btn-primary mt-5">
      <FontAwesomeIcon icon={faGoogle} /> Continue with Google
      </button>
    </div>
  );
};

export default Login;
