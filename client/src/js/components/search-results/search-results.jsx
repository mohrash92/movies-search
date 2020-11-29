import React from 'react';
import SearchResult from '../search-result/search-result.jsx';

const SearchResults = ({ results }) => (
  results && results.length > 0 &&
  <div className='search-results'>
    {
      results.map((result, index) => {
        return <SearchResult key={index} title={result.title} posterPath={result.poster_path} id={result.id} />;
      })
    }
  </div>
);

export default SearchResults;
