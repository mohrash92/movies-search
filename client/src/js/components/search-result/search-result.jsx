import React from 'react';
import { Link } from 'react-router-dom';

const SearchResult = ({ title = '', posterPath, id, mediaType}) => (
  <div className='search-result'>
    <div>
      <Link to={`/${mediaType}/${id}`}><h1>{title}</h1></Link>
    </div>
    <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} />
  </div>
);

export default SearchResult;
