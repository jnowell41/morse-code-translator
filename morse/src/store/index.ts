import { createStore } from "redux";
// import transReducer from "../reducers/generalReducer";
import combineReducers from "../reducers";

const store = createStore(combineReducers);

store.dispatch({ type: "TRANSLATE_MORSE" });
store.dispatch({ type: "TRANSLATE_ENGLISH" });

export default store;
