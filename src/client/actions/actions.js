import * as types from '../constants/actionTypes';
import axios from 'axios'

const dummyProducts = [
  {
    name: 'JimsJams',
    price: '$6.00',
    description: 'best fucking jams'
  },
  {
    name: 'Carrots',
    price: '$3.00',
    description: 'they are big'
  },
  {
    name: 'Onions',
    price: '$1.30',
    description: 'smelly'
  }
]

export const getProducts = () => {
  return (dispatch) => {
    axios.get(`/api/92336/products`)
    .then((res) => {
      dispatch({type: types.GET_PRODUCTS, payload: dummyProducts})
    })
    .catch(err => console.log(err))
  }
}
