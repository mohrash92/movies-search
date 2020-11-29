import React from "react";
import ReactDOM from "react-dom";
import Search from "./search/search.jsx";
import ShowDetails from "./show-details/show-details.jsx";
import { getSearchData } from "./search/helpers";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchResults from "./search-results/search-results.jsx";

const App = () => {
  const { useState } = React;
  const [results, setResults] = useState([]);
  console.log("results=", results)
  return (

    <Router>
      <Search getSearchData={getSearchData} setResults={setResults} />
      <Switch>
        <SearchResults path="/search" exact results={results} />
        <Route path="/show/:id" component={ShowDetails}/>
      </Switch>
    </Router>
  )
};

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
