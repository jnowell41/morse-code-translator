import * as React from "react";
import styles from "./morse.module.scss";
import { connect } from "react-redux";
import { TransMorse } from "../../reducers/generalReducer";
import { IStore } from "../../reducers";

export interface IState {}
export interface IReactProps {}
export interface IReduxProps {
  morseToTranslate: string;
  TransMorse: (moreToTranslate: string) => void;
}

class Morse extends React.Component<IReactProps & IReduxProps, IState> {
  private handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.props.TransMorse(event.currentTarget.value);
  };

  public render() {
    let myOutput = this.props.morseToTranslate;
    return (
      <React.Fragment>
        <div className={styles.morseDiv}>Morse</div>
        <input type="text" placeholder="Morse" onChange={this.handleChange} />
        <div className={styles.translatedOutput}>
          {this.props.morseToTranslate}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IStore, props: IReactProps) => {
  return {
    morseToTranslate: state.translate.morseToTranslate
  };
};

const mapDispatchToProps = { TransMorse };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Morse);
