import * as React from "react";
import styles from "./morse.module.scss";
import { connect } from "react-redux";
import { IStore } from "../../reducers/generalReducer";
import { TransMorse } from "../../reducers/generalReducer";

export interface IState {
  morseToTranslate: string;
}
export interface IReactProps {}
export interface IReduxProps {
  morseToTranslate: string;
}

class Morse extends React.Component<IReactProps & IReduxProps, IState> {
  public render() {
    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
      this.setState({
        morseToTranslate: event.currentTarget.value
      });
    };
    console.log(this.props.morseToTranslate);
    return (
      <React.Fragment>
        <div className={styles.morseDiv}>Morse</div>
        <input type="text" placeholder="Morse" onChange={handleChange} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IStore, props: IReactProps) => {
  return {
    morseToTranslate: state.morseToTranslate
  };
};

const mapDispatchToProps = { TransMorse };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Morse);
