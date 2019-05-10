import * as React from "react";
import styles from "./translator.module.scss";
import { connect } from "react-redux";
import { IStore } from "../../reducers/index";
import { TransEnglish } from "../../reducers/generalReducer";

export interface IReactProps {}
export interface IReduxProps {
  textToTranslate: string;
  TransEnglish: (textToTranslate: string) => void;
}

export interface IState {
  textToTranslate: string;
}

class Translator extends React.Component<IReactProps & IReduxProps, IState> {
  public state = { textToTranslate: "" };

  render() {
    const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
      this.props.TransEnglish(event.currentTarget.value);
      console.log(this.props.textToTranslate);
    };

    console.log(this.props.textToTranslate);

    return (
      <React.Fragment>
        <div className={styles.englishDiv}>English</div>
        <input type="text" placeholder="English" onChange={handleChange} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: IStore, props: IReactProps) => {
  return { textToTranslate: state.translate.textToTranslate };
};
const mapDispatchToProps = { TransEnglish };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Translator);
