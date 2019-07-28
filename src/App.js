import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    // StrictMode checks are run in development only
    <React.StrictMode>
      <div>
        <h1 id="something-important">Adopt Me!</h1>
        <SearchParams />
      </div>
    </React.StrictMode>
  );
};
render(<App />, document.getElementById("root"));
