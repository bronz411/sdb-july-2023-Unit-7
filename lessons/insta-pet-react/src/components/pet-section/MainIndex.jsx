import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import PetFeed from "./PetFeed";
import { API_VIEW_ALL } from "../../constants/endpoints";
import PetCreate from "./PetCreate";

const MainIndex = (props) => {
  const [petFeedItems, setPetFeedItems] = useState([]);

  useEffect(() => {
    fetchPetFeed();
  }, []);

  async function fetchPetFeed() {
    try {
      let myHeaders = new Headers();
      myHeaders.append("Authorization", props.token);
      let requestOptions = {
        method: "GET",
        headers: myHeaders,
      };
      const response = await fetch(API_VIEW_ALL, requestOptions);
      const data = await response.json();
      setPetFeedItems(data.pets.reverse());
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Container>
        <Row>
          <Col md="4">
            <PetCreate token={props.token} fetchPetFeed={fetchPetFeed} />
          </Col>
          <Col md="8">
            <PetFeed
              petFeedItems={petFeedItems}
              token={props.token}
              fetchPetFeed={fetchPetFeed}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MainIndex;
