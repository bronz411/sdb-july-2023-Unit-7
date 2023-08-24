import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { API_DELETE_POST } from "../../constants/endpoints";

const PetCard = (props) => {
  let { description, title, imageURL } = props.pet;
  const id = props.pet["_id"];

  async function handleDelete() {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", props.token);
      let requestOptions = {
        method: "DELETE",
        headers: myHeaders,
      };
      const response = await fetch(API_DELETE_POST + id, requestOptions);
      const data = await response.json();
      props.fetchPetFeed();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Card
        className="mb-3"
        style={{
          width: "100%",
        }}>
        <img alt="Sample" src={imageURL} />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
            {title}
          </CardSubtitle> */}
          <CardText>{description}</CardText>
        </CardBody>
        <div className="d-flex justify-content-end">
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </Card>
    </>
  );
};

export default PetCard;
