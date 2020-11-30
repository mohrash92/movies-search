import React from 'react';
import { getPersonDetails, getPersonName } from '../../helpers';
import {Link} from "react-router-dom";
const PersonDetails = ({ match }) => {
  const { useState, useEffect } = React;
  const [personDetails, setPersonDetails] = useState([]);
  const [personName, setPersonName] = useState([]);
  const { params: { id } } = match;

  useEffect(() => {
    getPersonDetails(id, setPersonDetails);
    getPersonName(id, setPersonName);
  }, []);

  return (
    <div className="person-details">
      <h1>Person Details: {personName} </h1>
      {personDetails.map((detail, index) => {
        return (
          <div key={index} >
            <ul>
              {detail.title &&
              <Link to={`/show/${detail.id}`}><li>{detail.title}</li></Link>
              }
            </ul>
          </div>
        )
      })
      }
    </div>
  )
};

export default PersonDetails;
