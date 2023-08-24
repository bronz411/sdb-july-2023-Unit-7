import React, { useState } from "react";
import Login from "./Login-section/Login";
import SignUp from "./signup-section/signUp";

const Auth = (props) => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? (
        <Login updateToken={props.updateToken} />
      ) : (
        <SignUp updateToken={props.updateToken} />
      )}
    </>
  );
};

export default Auth;
