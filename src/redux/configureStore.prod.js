import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

export default function configureStore(initiaState) {
  return createStore(
    rootReducer,
    initiaState,
    applyMiddleware(thunk)
  );
}
