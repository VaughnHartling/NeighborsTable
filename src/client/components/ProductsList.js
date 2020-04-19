import React from 'react';
import Product from './Product';

const ProductsList = ({ products }) => {

  const renderProducts = () => {
    return products.map((product, i)=> {
      return <Product key={`product: ${i}`}{...product}/>
    })
  }
    return(
      <div style={{display: 'flex', flexWrap: 'wrap'}}>{renderProducts()}</div>
    )
}

export default ProductsList;
