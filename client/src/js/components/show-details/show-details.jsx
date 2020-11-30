import React from 'react';
import { getShowDetails, getMovieTitle } from '../../helpers';
import {Link} from "react-router-dom";
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
              <Link to={`/person/${detail.id}`}><h1>{detail.name}</h1></Link>
            </ul>
          </div>
        )
      })
      }
    </div>
  )
};

export default ShowDetails;
