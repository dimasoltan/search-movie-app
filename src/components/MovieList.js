import MovieItem from "./Movieitem"
import {Fragment} from "react";


const MovieList = ({movies}) => {

    return (
        <Fragment>
            <div className="container-fluid">
                <div className="row">
                    {movies && movies.length>0 && (
                        <h2 className="bg-primary text-info mb-3">Results</h2>
                    )}
                    {movies.map((movie) => (
                            <MovieItem key={movie.imdbID} movie={movie}/>
                        )
                    )}
                </div>
            </div>
        </Fragment>
    )

}

export default MovieList;