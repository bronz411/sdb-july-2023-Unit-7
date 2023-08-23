import React, { useState } from "react";

import { Form, FormGroup, Input, Label } from "reactstrap";
import PetButton from "../custom/PetButton";
import { API_REGISTER } from "../../constants/endpoints";

const SignUp = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    register();
  }

  async function register() {
    try {
      //headers
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      //request body
      let body = {
        firstname: firstName,
        lastname: lastName,
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
      const response = await fetch(API_REGISTER, requestOption);
      //get resonse
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
          <h2 className="text-center font-primary bold">SIGNUP FORM</h2>
          {/* Form Goes Here */}
          <Form>
            <FormGroup className="d-flex">
              <div>
                <Label for="First">First</Label>
                <Input
                  type="first"
                  name="first"
                  id="first"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter First Name"
                />
              </div>{" "}
              <div>
                <Label for="Last">Last</Label>
                <Input
                  type="last"
                  name="last"
                  id="last"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter Last Name"
                />
              </div>
            </FormGroup>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                placeholder="Enter Password"
              />
            </FormGroup>
            {/* form group end password */}
            <PetButton onClick={handleSubmit}>SIGN UP</PetButton>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
