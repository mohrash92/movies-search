import React from 'react';

const SearchResult = ({ title = '', posterPath }) => (
  <div className='search-result'>
    <h1>{title}</h1>
    <img src={`https://image.tmdb.org/t/p/w500/${posterPath}`} />
  </div>
);

export default SearchResult;
