import React from 'react';
import { Redirect } from 'react-router-dom';

class ProductForm extends React.Component {
  state = {
    submitted: false
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addProduct(this.state)
    this.setState({submitted: true})
  }

  render() {
    if(this.state.submitted === true) return <Redirect to='/products'/>
    else return (
      <div>
        <form style={styles.formContainer} onChange={this.handleChange} onSubmit={this.handleSubmit}> 
          <div>
            Name
          </div>
          <input style={styles.input} name='name'/>
          <div>
            About
          </div>
          <input style={styles.input} name='about'/>
          <div>
            Zip
          </div>
          <input style={styles.input} name='zip'/>
          <div>
            Seller ID
          </div>
          <input style={styles.input} name='sellerId'/>
          <div>
            Title
          </div>
          <input style={styles.input} name='title'/>
          <div>
            Description
          </div>
          <input style={styles.input} name='description'/>
          <div>
            Price
          </div>
          <input style={styles.input} name='price'/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default ProductForm

const styles = {
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '10rem',
  },
  input: {
    height: '30px'
  }
}
