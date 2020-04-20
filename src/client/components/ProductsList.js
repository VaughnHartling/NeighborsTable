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
        <nav style={styles.nav}>
          <Link to='/' style={styles.navLinkHome}>Neighbor's Table</Link>
          <Link to='/new' style={styles.navLinkProduct}>list products</Link>
        </nav>
        <div style={styles.container}>{renderProducts()}</div>
      </>
    )
}

export default ProductsList;

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))',
    gridGap: '1rem',
    margin: '8rem 2rem'
  },
  nav: {
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
    color: '#EAEAEA',
    backgroundColor: '#3F9E4D',
    minHeight: '15vh',
    width: '100%',
    padding: '0 2rem',
    marginTop: '-.5rem',
    marginLeft: '-.5rem',
    opacity: '.9',
    position: 'fixed',
    top: '0'
  },
  navLinkHome: {
    fontFamily: 'Varela Round',
    fontSize: '2rem',
    color: '#EAEAEA',
    fontWeight: '900',
    textDecoration: 'none',
  },
  navLinkProduct: {
    fontFamily: 'Varela Round',
    fontSize: '1.2rem',
    color: 'aliceblue',
    fontWeight: '900',
    textDecoration: 'none',
    marginLeft: '4rem',
  }
}
