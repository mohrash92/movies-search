import React from "react";
import ReactDOM from "react-dom";
import Search from "./search/search.jsx";
const App = () => (
  <Search />
);

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
