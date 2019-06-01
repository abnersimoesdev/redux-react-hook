import React from "react";
import ReactDOM from "react-dom";
import { StoreContext } from "redux-react-hook";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { makeStore } from "./store";

const store = makeStore();

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
