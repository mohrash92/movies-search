import React from 'react';
import Button from "../button/button.jsx";
const Search = () => (
  <form role='search'>
    <label htmlFor="search-input">Search this site for movies, shows and actors</label>
    <input type="search" id="search-input" name="search" />
    <Button />
  </form>
);

export default Search;
