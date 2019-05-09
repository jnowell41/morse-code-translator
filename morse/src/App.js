import React from "react";
import logo from "./logo.svg";
import "./App.css";
import InputContainer from "./containers/inputContainers";
import { Provider } from "react-redux";
import store from "../src/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <InputContainer />
      </div>
    </Provider>
  );
}

export default App;
