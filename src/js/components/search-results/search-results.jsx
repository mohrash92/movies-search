import React from 'react';
import SearchResult from '../search-result/search-result.jsx';
import './search-results.css';
import PropTypes from "prop-types";

const SearchResults = ({ results = [] }) => (
  results && results.length > 0 &&
  <div className='search-results'>
    {
      results.map((result, index) => {
        return <SearchResult key={index} title={result && result.title || result.name} posterPath={result && result.poster_path || result.profile_path} id={result && result.id} mediaType={result.media_type}/>;
      })
    }
  </div>
);

SearchResult.propTypes = {
  results: PropTypes.array.isRequired
};

export default SearchResults;
