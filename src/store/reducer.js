import * as actionTypes from "./actionTypes";

const initialState = {
  currencies: null,
  loading: false,
};

const initCurrenciecStart = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

const initCurrenciesFail = (state, action) => {
  return {
    ...state,
    loading: false,
  };
};

const setCurrencies = (state, action) => {
  return {
    ...state,
    currencies: action.currencies,
    loading: false,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_CURRENCIES_START:
      return initCurrenciecStart(state, action);
    case actionTypes.SET_CURRENCIES:
      return setCurrencies(state, action);
    case actionTypes.INIT_CURRENCIES_FAIL:
      return initCurrenciesFail(state, action);
    default:
      return state;
  }
};

export default reducer;
