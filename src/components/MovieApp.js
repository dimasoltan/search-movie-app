import React, {Fragment, useState} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import {Spinner} from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";

const MovieApp = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [movies, setMovies] = useState([]);

    const fetchMovies = async (searchTerm) => {
        setLoading(true);
        setError(null);

        const API_KEY = process.env.REACT_APP_API_KEY;

        try {

            const response = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
            if (response.data.Response === "True") {
                setMovies(response.data.Search);
            } else {
                setError(response.data.Error);
            }
        } catch (error) {
            setError('An Error Occured While Fetching the Data:' + error);
        } finally {
            setLoading(false);
        }
    }


    return (
        <Fragment>
            <Header/>

            <div className="container-fluid">

                <SearchBar onSearch={fetchMovies}/>

                {loading && (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )}
                {error && <p className="text-danger fw-bold">{error}</p>}

                {!error && !loading && <MovieList movies={movies}/>}
            </div>

            <Footer/>
        </Fragment>
    );
}

export default MovieApp;