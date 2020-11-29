import React from 'react';
import { Link } from 'react-router-dom';

const SearchResult = ({ title = '', posterPath, id }) => (
  <div className='search-result'>
    <Link to={`/show/${id}`}><h1>{title}</h1></Link>
    <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} />
  </div>
);

export default SearchResult;
