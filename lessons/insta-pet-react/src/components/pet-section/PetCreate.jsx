import React, { useState } from "react";
import { FormGroup, Label, Input, Form } from "reactstrap";
import { API_CREATE_POST } from "../../constants/endpoints";
import PetButton from "../custom/PetButton";

const PetCreate = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const petData = {
        title: title,
        description: description,
        imageURL: imageURL,
      };
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", props.token);
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(petData),
      };
      const response = await fetch(API_CREATE_POST, requestOptions);
      const data = await response.json();
      props.fetchPetFeed();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="d-flex neutral-background rounded p-5 flex-column">
        <h2 className="font-primary text-center">Create a Pet Post</h2>
        {/* build form here, needs title, description, and image url. will need usestate for each */}
        <Form className="w-100">
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              type="title"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Post Title"
            />
          </FormGroup>
          <FormGroup>
            <Label for="imageURL">imageURL</Label>
            <Input
              type="imageURL"
              name="imageURL"
              id="imageURL"
              placeholder="Enter Image URL"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter Post Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormGroup>
          <PetButton onClick={handleSubmit}>Submit</PetButton>
        </Form>
      </div>
    </>
  );
};

export default PetCreate;
