import * as React from "react";
import styles from "./morse.module.scss";
export interface IProps {}

export interface IState {}

class Morse extends React.Component<IProps, IState> {
  render() {
    return (
      <React.Fragment>
        <div className={styles.morseDiv}>Morse</div>
        <input type="text" placeholder="English" />
      </React.Fragment>
    );
  }
}

export default Morse;
