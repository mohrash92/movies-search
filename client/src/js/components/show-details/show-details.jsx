import React from 'react';
import { getShowDetails, getMovieTitle } from '../../helpers';
const ShowDetails = ({ match }) => {
  const { useState, useEffect } = React;
  const [showDetails, setShowDetails] = useState([]);
  const [movieTitle, setMovieTitle] = useState([]);
  const { params: { id } } = match;

  useEffect(() => {
    getShowDetails(id, setShowDetails);
    getMovieTitle(id, setMovieTitle);
  }, []);

  return (
    <div className="show-details">
      <h1>Cast for {movieTitle}</h1>
      {showDetails.map((detail, index) => {
        return (
          <div key={index} >
            <ul>
              <li>{detail.name}</li>
            </ul>
          </div>
        )
      })
      }
    </div>
  )
};

export default ShowDetails;
