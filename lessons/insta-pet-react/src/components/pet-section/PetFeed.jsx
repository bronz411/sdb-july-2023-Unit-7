import PetCard from "./PetCard";

const PetFeed = (props) => {
  return (
    <>
      {props.petFeedItems.map((pet, index) => (
        <PetCard
          key={index}
          pet={pet}
          token={props.token}
          fetchPetFeed={props.fetchPetFeed}
        />
      ))}
    </>
  );
};

export default PetFeed;
