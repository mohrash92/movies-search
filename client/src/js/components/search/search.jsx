import React from 'react';
import Button from "../button/button.jsx";
import { withRouter } from 'react-router';
import './search.css';

const Search = ({ getSearchData, setResults, history, isChecked }) => {
  const { useRef, useEffect, useState } = React;
  const [searchTerm, setSearchTerm] = useState('');
  const searchRef = useRef(null);
  const onChangeHandler = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    searchRef.current.focus();
  }, []);
    console.log("isChecked in Search.jsx", isChecked)
  return (
    <form role='search' onSubmit={(e) => getSearchData(e, searchTerm, setResults, history, isChecked)}>
      <label htmlFor="search-input" className="visually-hidden">
          Search this site for movies, shows and actors
      </label>
      <input type="search" id="search-input" name="search" ref={searchRef} onChange={onChangeHandler} value={searchTerm}/>
      <Button />
    </form>
  )
};

export default withRouter(Search);
