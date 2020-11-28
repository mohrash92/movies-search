import React from "react";
import ReactDOM from "react-dom";

const App = () => (
  <form>
    <input
      type="text"
      value={'sdfdf'}
    />
  </form>
);

export default App;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
