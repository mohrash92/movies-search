import React from 'react';
import Button from "../button/button.jsx";
import './search.css';
import { getSearchData } from "./helpers";

const Search = () => {
  const { useRef, useEffect, useState } = React;
  const [searchTerm, setSearchTerm] = useState('');
  const search = useRef(null);

  const onChangeHandler = event => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    search.current.focus();
  }, []);

  return (
    <form role='search'>
      <label htmlFor="search-input" className="visually-hidden">
          Search this site for movies, shows and actors
      </label>
      <input type="search" id="search-input" name="search" ref={search} onChange={onChangeHandler} value={searchTerm}/>
      <Button handleOnClick={(e) => getSearchData(e, searchTerm)}/>
    </form>
  )
};

export default Search;
