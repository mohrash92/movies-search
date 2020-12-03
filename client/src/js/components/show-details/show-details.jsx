import React from 'react';
import { getDetails, getTitle } from '../../helpers';
import {Link} from "react-router-dom";
const ShowDetails = ({ match }) => {
  const { useState, useEffect } = React;
  const [showDetails, setShowDetails] = useState([]);
  const [showTitle, setShowTitle] = useState([]);
  const { params: { id } } = match;

  useEffect(() => {
    getDetails(id, setShowDetails, 'tv');
    getTitle(id, setShowTitle, 'tv');
  }, []);
  console.log("showTitle in show",  showTitle);
  return (
    <div className="show-details">
      <h1>Cast for {showTitle}</h1>
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
