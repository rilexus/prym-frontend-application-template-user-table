import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore
} from "redux";

const middlewares = [];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  reducer: (state = {}) => state,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
export { store };
