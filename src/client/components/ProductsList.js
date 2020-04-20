import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

const ProductsList = ({ products }) => {

  const renderProducts = () => {
    return products.map((product, i)=> {
      return <Product key={`product: ${i}`}{...product}/>
    })
  }
    return(
      <> 
        <Link to='/new'>Add Product</Link>
        <div style={styles.container}>{renderProducts()}</div>
      </>
    )
}

export default ProductsList;

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))',
    gridGap: '1rem'
  }
}
