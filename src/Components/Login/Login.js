import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import googleIcon from '../../resources/icons/google.png';
import logo from '../../resources/icons/logo.png';
import firebaseConfig from "./firebase.config";
import "./Login.css";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.getItem('token', idToken)
            }).catch(function (error) {
                // Handle error
            });
    }

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // The signed-in user info.
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email };
            setLoggedInUser(signedInUser);
            setUserToken();
            history.replace(from);


        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);

        });
    }

  return (
    <div>
      <div className="container">
        <figure className=" d-flex justify-content-center my-5">
          <img className="logo" src={logo} alt="" />
        </figure>
        <div className="parentForms">
          <h3 className="text-center my-4">Login</h3>
          <div className="btnStyle bg-primary d-flex justify-content-center">
            <button onClick={handleGoogleSignIn}>
              <img className="img-fluid" src={googleIcon} alt="" />
              <span className="googleText">Continue With Google</span>
            </button>
          </div>
          <h6 className="text-center">
            Don't have an account? <a href="http://">Create a new account</a>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Login;
