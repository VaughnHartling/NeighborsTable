import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import * as actions from '../actions/actions';
import Home from '../components/Home';
import ProductsList from '../components/ProductsList';

const mapStateToProps = state => ({
  products: state.products.productsList,
})

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(actions.getProducts())
})

class ProductsContainer extends React.Component {

  componentDidMount() {
    this.props.getProducts()
  }


  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={()=><Home />}/>
          <Route exact path="/products" render={()=><ProductsList products={this.props.products} />} />
        </Switch>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);