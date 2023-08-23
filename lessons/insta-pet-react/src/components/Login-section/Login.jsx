import React, { useState } from "react";

import { Form, FormGroup, Input, Label } from "reactstrap";
import PetButton from "../custom/PetButton";
import { API_LOGIN } from "../../constants/endpoints";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    login();
  }

  async function login() {
    try {
      //headers
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      //request body
      let body = {
        email: email,
        password: password,
      };
      //request options
      let requestOption = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body),
      };
      //send request
      const response = await fetch(API_LOGIN, requestOption);
      //get response
      const data = await response.json();
      //update token
      props.updateToken(data.token);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div
        className="d-flex justify-content-center mt-5 align-items-center"
        style={{ height: "50vh" }}>
        <div
          className="secondary-background p-5 rounded"
          style={{ width: "450px" }}>
          <h2 className="text-center font-primary bold">LOGIN FORM</h2>
          {/* Form Goes Here */}
          <Form>
            {/* Form Group for Emaail */}
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
              />
            </FormGroup>
            {/* Form Group End Email */}
            {/* form group for password */}
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
              />
            </FormGroup>
            {/* form group end password */}
            <PetButton onClick={handleSubmit}>LOGIN</PetButton>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
