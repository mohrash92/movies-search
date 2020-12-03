import React from 'react';
import { getDetails, getTitle } from '../../helpers';
import {Link} from "react-router-dom";
const MovieDetails = ({ match }) => {
  const { useState, useEffect } = React;
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieTitle, setMovieTitle] = useState([]);
  const { params: { id } } = match;

  useEffect(() => {
    getDetails(id, setMovieDetails, 'movie');
    getTitle(id, setMovieTitle, 'movie');
  }, []);
  console.log("movieTitle in movie details",  movieTitle);
  return (
    <div className="movie-details">
      <h1>Cast for {movieTitle}</h1>
      {movieDetails.map((detail, index) => {
        return (
          <div key={index} >
            <ul>
              <Link to={`/person/${detail.id}`}><h1>{detail.name}</h1></Link>
            </ul>
          </div>
        )
      })
      }
    </div>
  )
};

export default MovieDetails;
