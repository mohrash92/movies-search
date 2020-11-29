import React from 'react';
import Button from "../button/button.jsx";
import './search.css';
import { getSearchData } from "./helpers";
import SearchResults from "../search-results/search-results.jsx";

const Search = () => {
  const { useRef, useEffect, useState } = React;
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const searchRef = useRef(null);

  const onChangeHandler = event => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <form role='search' onSubmit={(e) => getSearchData(e, searchTerm, setResults)}>
      <label htmlFor="search-input" className="visually-hidden">
          Search this site for movies, shows and actors
      </label>
      <input type="search" id="search-input" name="search" ref={searchRef} onChange={onChangeHandler} value={searchTerm}/>
      <Button />
      {results.length > 0 && <SearchResults results={results} />}
    </form>
  )
};

export default Search;
