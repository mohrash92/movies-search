import React from "react";
import ReactDOM from "react-dom";
import Search from "./search/search.jsx";
import ShowDetails from "./show-details/show-details.jsx";
import SearchResults from "./search-results/search-results.jsx";
import PersonDetails from "./person-details/person-details.jsx";
import CheckBox from "./checkbox/checkbox.jsx";
import MovieDetails from "./movie-details/movie-details.jsx";
import { getSearchData } from "../helpers";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const mediaTypes = [
  {
    name: 'tv',
    key: 'tv',
    label: 'Search for TV shows',
  },
  {
    name: 'movie',
    key: 'movie',
    label: 'Search for movies',
  },
  {
    name: 'person',
    key: 'person',
    label: 'Search for people',
  }
];
const App = () => {
  const { useState } = React;
  const [results, setResults] = useState([]);
  const [checkBoxData, setCheckboxData] = useState({});

  const setIsChecked = (event) => {
    setCheckboxData({...checkBoxData, [event.target.name] : event.target.checked });
  };
  console.log("checkBoxData", checkBoxData);
  return (
    <Router>
      <Search getSearchData={getSearchData} setResults={setResults} isChecked={checkBoxData} />
      {mediaTypes.map((mediaType) => (
        <CheckBox key={mediaType.key} mediaType={mediaType.name} isChecked={checkBoxData.isChecked} onChange={setIsChecked}/>
      ))}
      <Switch>
        <SearchResults path="/search" exact results={results} />
        <Route path="/tv/:id" component={ShowDetails} />
        <Route path="/movie/:id" component={MovieDetails} />
        <Route path="/person/:id" component={PersonDetails} />
      </Switch>
    </Router>
  )
};

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
