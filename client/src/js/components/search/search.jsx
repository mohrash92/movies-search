import React from 'react';
import Button from "../button/button.jsx";
import { withRouter } from 'react-router';
import './search.css';
import PropTypes from "prop-types";

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

Search.propTypes = {
  getSearchData: PropTypes.func.isRequired,
  setResults: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired,
  isChecked: PropTypes.bool
};

export default withRouter(Search);
