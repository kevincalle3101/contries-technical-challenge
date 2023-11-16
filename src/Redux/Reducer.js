import {ALL_COUNTRIES, DETAIL} from "./actions-types";


const initialState = {
    allCountries: [],
    detail: {}
}
const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
      case ALL_COUNTRIES:
        return {
          ...state,
          allCountries: payload,
        };
      case DETAIL:
        return {
          ...state,
          detail: payload,
        }
        default:
      return state;
    }
}

export default reducer;
