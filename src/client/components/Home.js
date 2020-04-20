import React from 'react';
import { Link, Redirect } from 'react-router-dom'

class Home extends React.Component {
  state = {
    submitted: false
  }
  
  //sets state of this component property to the name of the input field and grabs value of input field
  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }
  
  //passing local state of this component to redux store through the getProducts action
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.getProducts(this.state.zip)
    e.target.reset()
    this.setState({submitted: true})
  }

  render() {
    if(this.state.submitted === true) return <Redirect to='/products' />
    else return(
      <div>
        <h1>Get Local!</h1>
        <form  onSubmit={this.handleSubmit}>
          <input type="text" name='zip' onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Home;
