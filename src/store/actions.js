import * as actionTypes from "./actionTypes";

export const initCurrenciecStart = () => {
  return {
    type: actionTypes.INIT_CURRENCIES_START,
  };
};

export const setCurrencies = (currencies) => {
  return {
    type: actionTypes.SET_CURRENCIES,
    currencies: currencies,
  };
};

export const initCurrenciesFail = (error) => {
  return {
    type: actionTypes.INIT_CURRENCIES_FAIL,
    error: error,
  };
};

export const initCurrencies = () => {
  return (dispatch) => {
    dispatch(initCurrenciecStart());
    fetch("http://api.nbp.pl/api/exchangerates/tables/c/?format=json")
      .then((res) => res.json())
      .then((res) => {
        dispatch(setCurrencies(res[0].rates));
      })
      .catch((error) => {
        dispatch(initCurrenciesFail(error));
        console.log(error);
      });
  };
};
