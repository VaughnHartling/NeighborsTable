import React from 'react';


const Product = ({ name, price, description }) => {

    return (
      <div>
        <div>{name}</div>
        <div>{price}</div>
        <div>{description}</div>
      </div>
    )
  }


export default Product;