const MovieReviews = (props) => {
    let {movieTitle, starReview, comment} = props
    return ( 
        <>
        <h2>The movie that was reviewed was {movieTitle}. It was given a {starReview} star review. The comment that was made is the following: "{comment}"</h2>
        </>
     );
}
 
export default MovieReviews;