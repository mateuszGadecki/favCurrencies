import * as actionTypes from "./actionTypes";

const initialState = {
  currencies: null,
  favorites: [],
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
  const currencies = action.currencies.map((el) => {
    const mid = (
      Math.round(((el.ask + el.bid) / 2 + Number.EPSILON) * 100) / 100
    ).toFixed(2);

    return {
      ...el,
      mid: mid,
    };
  });
  return {
    ...state,
    currencies: currencies,
    loading: false,
  };
};

const addToFavorites = (state, action) => {
  const favorites = [...state.favorites];
  const index = favorites.findIndex((e) => e.code === action.favorites.code);
  if (index === -1) {
    favorites.push(action.favorites);
  } else {
    console.log("exists");
  }
  return {
    ...state,
    favorites: favorites,
  };
};

const deleteAll = (state, action) => {
  return {
    ...state,
    favorites: [],
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
    case actionTypes.ADD_TO_FAVORITES:
      return addToFavorites(state, action);
    case actionTypes.DELETE_ALL:
      return deleteAll(state, action);
    default:
      return state;
  }
};

export default reducer;
