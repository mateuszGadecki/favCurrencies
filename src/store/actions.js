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
export const setFavCurrencies = () => {
  return {
    type: actionTypes.SET_FAV_CURRENCIES,
  };
};

export const initCurrenciesFail = (error) => {
  return {
    type: actionTypes.INIT_CURRENCIES_FAIL,
    error: error,
  };
};

export const addToFavorites = (favorites) => {
  return {
    type: actionTypes.ADD_TO_FAVORITES,
    favorites: favorites,
  };
};

export const deleteAll = () => {
  return {
    type: actionTypes.DELETE_ALL,
    favorites: [],
  };
};

export const removeCurrency = (code) => {
  return {
    type: actionTypes.REMOVE_CURRENCY,
    code: code,
  };
};

export const currentItem = (obj) => {
  return {
    type: actionTypes.CURRENT_ITEM,
    obj: obj,
  };
};

export const initCurrencies = () => {
  return (dispatch) => {
    dispatch(initCurrenciecStart());
    fetch("https://api.nbp.pl/api/exchangerates/tables/c/?format=json")
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
