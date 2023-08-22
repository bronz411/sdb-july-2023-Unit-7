const MovieInstructions = (props) => {
    let ulStyle = { textAlign: "left", color: "red" };
  
    return (
      <>
        <h2>Challenge 2 Instructions</h2>
        <h4>Folder Setup</h4>
        <hr />
        <ul style={ulStyle}>
          <li>Create a folder Movie</li>
          <li>Create a file MovieIndex.jsx (Parent)</li>
          <li>Create a file MovieReview.jsx(Child)</li>
        </ul>
        <h4>Tasks</h4>
        <ul style={ulStyle}>
          <li>
            In this file above we have supplied you with the array of data to use
            for the movie review comments. Import this array into the Parent
          </li>
          <li>
            Use a map function in the Parent to pass a single movie review as a
            PROP to the MovieReview
          </li>
          <li>Use Destructuring in the child</li>
        </ul>
  
        <p>
          The movie that was reviewed was [MOVIE NAME]. It was given a [HOW MANY
          STAR REVIEW] star review. The comment that was made is the following:{" "}
          [MOVIE COMMENT]
        </p>
      </>
    );
  };
  
  export default MovieInstructions;