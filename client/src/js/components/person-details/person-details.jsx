import React from 'react';
import {getDetails, getTitle} from '../../helpers';
import {Link} from "react-router-dom";

const PersonDetails = ({match}) => {
  const {useState, useEffect} = React;
  const [personDetails, setPersonDetails] = useState([]);
  const [personName, setPersonName] = useState([]);
  const {params: {id}} = match;

  useEffect(() => {
    getDetails(id, setPersonDetails, 'person');
    getTitle(id, setPersonName, 'person');
  }, []);

  return (
    <div className="person-details">
      <h1>Person Details: {personName} </h1>
      {personDetails.map((detail, index) => {
        return (
          <div key={index}>
            <ul>
              {detail.title &&
                <Link to={`/${detail.media_type}/${detail.id}`}>
                  <li>{detail.title}</li>
                </Link>
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
