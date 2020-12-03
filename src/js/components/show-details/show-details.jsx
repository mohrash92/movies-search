import React from 'react';
import { getDetails, getTitle } from '../../helpers';
import Details from "../details/details.jsx";
import PropTypes from "prop-types";

const ShowDetails = ({ match }) => {
  const { useState, useEffect } = React;
  const [showDetails, setShowDetails] = useState([]);
  const [showTitle, setShowTitle] = useState([]);
  const { params: { id } } = match;

  useEffect(() => {
    getDetails(id, setShowDetails, 'tv');
    getTitle(id, setShowTitle, 'tv');
  }, []);

  return (
    <div className="show-details">
      <h1>Cast for {showTitle}</h1>
      {showDetails.map((detail, index) => {
        return <Details key={index} path={`/person/${detail.id}`} title={detail.name}/>
      })
      }
    </div>
  )
};

ShowDetails.propTypes = {
  match: PropTypes.object
};

export default ShowDetails;
