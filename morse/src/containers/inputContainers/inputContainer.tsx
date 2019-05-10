import * as React from "react";
import Translator from "../../components/translator";
import Morse from "../../components/morse";
import { TransEnglish } from "../../reducers/generalReducer";
import { TransMorse } from "../../reducers/generalReducer";

export interface IProps {}
export interface IReduxProps {
  textToTranslate: string;
  morseToTranslate: string;
}

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
