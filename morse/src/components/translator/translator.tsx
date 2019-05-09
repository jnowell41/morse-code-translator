import * as React from "react";
import styles from "./translator.module.scss";
import { connect } from "react-redux";
import { IStore } from "../../reducers/generalReducer";

export interface IProps {}
export interface IReduxProps {}

export interface IState {
  textToTranslate: string;
}

class Translator extends React.Component<IProps, IState> {
  public state = { textToTranslate: "" };

  render() {
    const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
      this.setState({
        textToTranslate: event.currentTarget.value
      });
    };

    return (
      <React.Fragment>
        <div className={styles.englishDiv}>English</div>
        <input
          type="text"
          placeholder="English"
          onChange={handleChange}
          value={this.state.textToTranslate}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IStore, props: IReduxProps) => {
  return { textToTranslate: state.textToTranslate };
};

export default connect(mapStateToProps)(Translator);
