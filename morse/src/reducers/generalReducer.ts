import { ThunkAction } from "redux-thunk";

export interface IStore {
  textToTranslate: string;
}
export interface ITransEnglish {
  type: typeof TRANSLATE_ENGLISH;
  textToTranslate: string;
}
export interface ITransMorse {
  type: typeof TRANSLATE_MORSE;
  morseToTranslate: string;
}

//action types
export const TRANSLATE_ENGLISH = "TRANSLATE_ENGLISH";
export const TRANSLATE_MORSE = "TRANSLATE_MORSE";

//action creator
export const TransEnglish = (): ITransEnglish => ({
  type: TRANSLATE_ENGLISH,
  textToTranslate
});

export const TransMorse = (): ITransMorse => ({
  type: TRANSLATE_MORSE,
  morseToTranslate
});

export interface IInitialState {
  textToTranslate: string;
  morseToTranslate: string;
}
const initialState: IInitialState = {
  textToTranslate: "",
  morseToTranslate: ""
};

type ITranslateActions = ITransEnglish | ITransMorse;

const transReducer = (state = initialState, action: ITranslateActions) => {
  switch (action.type) {
    case TRANSLATE_ENGLISH:
      return {
        ...state
      };
    case TRANSLATE_MORSE:
      return {
        ...state
      };
    default:
      return {
        state
      };
  }
};
export default transReducer;
