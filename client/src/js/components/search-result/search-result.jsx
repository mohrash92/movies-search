import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

const SearchResult = ({ title = '', posterPath, id, mediaType}) => (
  <div className='search-result'>
    <div>
      <Link to={`/${mediaType}/${id}`}><h1>{title}</h1></Link>
    </div>
    <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} />
  </div>
);

SearchResult.propTypes = {
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string,
  id: PropTypes.number.isRequired,
  mediaType: PropTypes.string.isRequired
};

export default SearchResult;
