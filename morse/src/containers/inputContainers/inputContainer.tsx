import * as React from "react";
import Translator from "../../components/translator";
import Morse from "../../components/morse";

export interface IProps {}
export interface IReduxProps {}

export interface IState {}

class InputContainer extends React.Component<IProps & IReduxProps, IState> {
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
