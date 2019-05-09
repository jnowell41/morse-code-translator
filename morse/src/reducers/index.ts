import transReducer from "./generalReducer";
import { IInitialState } from "../reducers/generalReducer";
import { combineReducers } from "redux";

export interface IStore {
  translate: IInitialState;
}

export default combineReducers({
  translate: transReducer
});
