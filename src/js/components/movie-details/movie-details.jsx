import React from 'react';
import { getDetails, getTitle } from '../../helpers';
import Details from "../details/details.jsx";
import './movie-detail.css';
import PropTypes from "prop-types";

const MovieDetails = ({ match }) => {
  const { useState, useEffect } = React;
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieTitle, setMovieTitle] = useState('');
  const { params: { id } } = match;

  useEffect(() => {
    getDetails(id, setMovieDetails, 'movie');
    getTitle(id, setMovieTitle, 'movie');
  }, []);

  return (
    <div className="movie-details">
      <h1>Cast for {movieTitle}</h1>
      {movieDetails.map((detail, index) => {
        return (
          <Details
            key={index}
            path={`/person/${detail.id}`}
            title={detail.name}
          />
        )
      })
      }
    </div>
  )
};

MovieDetails.propTypes = {
  match: PropTypes.object
};

export default MovieDetails;
