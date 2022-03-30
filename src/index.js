import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.scss";
import TicetsStore from "./store/ticetsStore";

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider
    value={{
      ticets: new TicetsStore(),
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
