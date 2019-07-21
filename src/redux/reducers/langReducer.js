import { LANG_FR, LANG_EN } from '../actions/types';

export default function langReducer(state = {language: "fr"}, action) {
  console.log(state,action);
  switch (action.type) {
    case LANG_FR:
      return {language: "fr"};
    case LANG_EN:
      return {language: "en"};
    default:
      return state;
  }
}
