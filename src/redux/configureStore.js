import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initiaState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose; // add support for Redux dev tools

  return createStore(
    rootReducer,
    initiaState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
