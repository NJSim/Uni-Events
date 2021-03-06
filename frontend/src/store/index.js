import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import eventReducer from "./events";
import sessionReducer from './session';
import categoryReducer from "./categories";
import isRegisteredReducer from "./isRegistered";

const rootReducer = combineReducers({
  session: sessionReducer,
  events: eventReducer,
  categories: categoryReducer,
  isRegistered: isRegisteredReducer
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
