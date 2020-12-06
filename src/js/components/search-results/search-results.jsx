import React from 'react';
import SearchResult from '../search-result/search-result.jsx';
import './search-results.css';
import PropTypes from "prop-types";

const SearchResults = ({ results = [] }) => (
  results && results.length > 0 &&
  <div className='search-results'>
    {
      results.map((result, index) => {
        const title = result && result.title || result.name;
        const profilePath = result && result.poster_path || result.profile_path;
        const id = result && result.id;
        return (
          <SearchResult
            key={index}
            title={title}
            posterPath={profilePath}
            id={id}
            mediaType={result.media_type}
          />
        );
      })
    }
  </div>
);

SearchResult.propTypes = {
  results: PropTypes.array
};

export default SearchResults;
