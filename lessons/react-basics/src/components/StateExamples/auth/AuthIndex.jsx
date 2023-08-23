import React, { useState } from 'react';
import Login from "./Login";
import Signup from "./Signup";


const AuthIndex = (props) => {
    const [showLogin, setShowLogin] = useState(true);
    return ( <>
    <button onClick={()=> setShowLogin(!showLogin)} >{showLogin ? "show signup": "show login"}</button>
    {showLogin ? <Login/>: <Signup/>}
    </> );
}
 
export default AuthIndex;

/* 
create a turnary that will change the text based on the showlogin state.
have the button display show login on the signup page and show signup on the login page.
*/