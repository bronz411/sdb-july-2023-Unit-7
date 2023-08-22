import {movieReview} from "../../data/movie-data"
import MovieReviews from "./MovieReview";

const Movie = (props) => {
    return ( 
        <>
        <h2>Movie Reviews</h2>
        {movieReview.map((movie, index)=>(
            <MovieReviews key={index} movieTitle={movie.movieTitle} starReview={movie.starReview} comment={movie.comment} />
            // if in the data array the keys all match the information on what is passed to the child, you can use {...movie} the spread array to grab all the info.
        ))}
        </>
     );
}
 
export default Movie;