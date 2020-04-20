import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
  state = {}
  
  //sets state of this component property to the name of the input field and grabs value of input field
  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }
  
  //passing local state of this component to redux store through the getProducts action
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.getProducts(this.state.zip)
  }

  render() {
    return(
      <div>
        <h1>Get Local!</h1>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <input type="text" name='zip'/>
          <button type="submit">Submit</button>
        </form>
        <Link to="/products">Remove me!</Link>
      </div>
    )
  }
}

export default Home;
