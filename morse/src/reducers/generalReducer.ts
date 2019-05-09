export interface IStore {
  textToTranslate: string;
  morseToTranslate: string;
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
export const TransEnglish = (textToTranslate: string): ITransEnglish => ({
  type: TRANSLATE_ENGLISH,
  textToTranslate
});

export const TransMorse = (morseToTranslate: string): ITransMorse => ({
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
        ...state,
        textToTranslate: action.textToTranslate
      };
    case TRANSLATE_MORSE:
      return {
        ...state,
        morseToTranslate: action.morseToTranslate
      };
    default:
      return {
        ...state
      };
  }
};
export default transReducer;
