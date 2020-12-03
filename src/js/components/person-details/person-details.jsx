import React from 'react';
import {getDetails, getTitle} from '../../helpers';
import Details from "../details/details.jsx";
import './person-details.css';
import PropTypes from "prop-types";

const PersonDetails = ({match}) => {
  const {useState, useEffect} = React;
  const [personDetails, setPersonDetails] = useState([]);
  const [personName, setPersonName] = useState('');
  const {params: {id}} = match;

  useEffect(() => {
    getDetails(id, setPersonDetails, 'person');
    getTitle(id, setPersonName, 'person');
  }, []);

  return (
    <div className="person-details">
      <h1>Person Details: {personName} </h1>
      {personDetails.map((detail, index) => {
        return <Details key={index} path={`/${detail.media_type}/${detail.id}`} title={detail.title}/>
      })
      }
    </div>
  )
};

PersonDetails.propTypes = {
  match: PropTypes.object
};

export default PersonDetails;
