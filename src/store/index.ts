import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers, { initialState } from "./reducers";

export function makeStore() {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware())
  );
}
