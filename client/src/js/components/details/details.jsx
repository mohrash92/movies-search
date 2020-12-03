import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const Details = ({ key, path, title}) => (
  <div key={key} >
    <ul>
      <Link to={path}><h1>{title}</h1></Link>
    </ul>
  </div>
);

Details.propTypes = {
  key: PropTypes.string,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Details;
