import * as React from "react";
import Translator from "../../components/translator";
import Morse from "../../components/morse";

export interface IProps {}

export interface IState {}

class InputContainer extends React.Component<IProps, IState> {
  render() {
    return (
      <React.Fragment>
        <Translator />
        <Morse />
      </React.Fragment>
    );
  }
}

export default InputContainer;
