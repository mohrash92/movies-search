import React from "react";
import ReactDOM from "react-dom";
import Search from "./search/search.jsx";
import ShowDetails from "./show-details/show-details.jsx";
import SearchResults from "./search-results/search-results.jsx";
import PersonDetails from "./person-details/person-details.jsx";

import { getSearchData } from "../helpers";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
  const { useState } = React;
  const [results, setResults] = useState([]);
  return (
    <Router>
      <Search getSearchData={getSearchData} setResults={setResults} />
      <Switch>
        <SearchResults path="/search" exact results={results} />
        <Route path="/show/:id" component={ShowDetails} />
        <Route path="/person/:id" component={PersonDetails} />
      </Switch>
    </Router>
  )
};

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
