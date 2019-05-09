import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import transReducer from "../reducers/generalReducer";

const initialState = {};

const middlewares = [thunk];

const store = createStore(
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

store.dispatch<any>(transReducer());

export default store;
