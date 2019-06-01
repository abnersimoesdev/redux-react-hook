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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import { applyMiddleware, createStore } from 'redux';
// import thunk from 'redux-thunk';
// import reducer, { initialState } from './store/reducer';
// import App from './components/App';

// // If you are interested in using the redux devtools
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composeEnhancers = composeWithDevTools({});
// const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

// const ConnectedApp = () => (
//   <Provider store={store}>
//       <App />
//   </Provider>
// );

// ReactDOM.render(<ConnectedApp />, document.getElementById('root'));
