import * as types from '../constants/actionTypes';

const initialState = {
  products: []
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state
      };
  }
};

export default productsReducer;
