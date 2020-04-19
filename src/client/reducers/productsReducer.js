import * as types from '../constants/actionTypes';

const initialState = {
  productsList: []
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case(types.GET_PRODUCTS):
    debugger
    const fetchedList = action.payload;
    
    return{
      ...state, 
      productsList: fetchedList
    }
    default:
      return {
        ...state
      };
  }
};

export default productsReducer;
