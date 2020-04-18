import React from 'react';

import Product from './Product';



const ProductsList = ({ products }) => {

  const renderProducts = () => {
    return products.map((product)=> {
      return <Product {...product}/>
    })
  }
    return(
    <div>{renderProducts()}</div>
    )
}

export default ProductsList;