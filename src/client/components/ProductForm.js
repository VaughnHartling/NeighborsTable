import React from 'react';
import { Redirect, Link } from 'react-router-dom';

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
        <nav style={styles.nav}>
            <Link to='/' style={styles.navLinkHome}>Neighbor's Table</Link>
        </nav>
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
            <button style={styles.button}type='submit'>Submit</button>
          </form>
        </div>
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
    alignItems: 'center'
  },
  input: {
    minWidth: '300px',
    fontSize: '1.5rem',
    padding: '.8rem'
  },
  button: {
    minWidth: '150px',
    fontSize: '1.2rem',
    fontWeight: '500',
    borderRadius: '5px',
    padding: '8px 16px',
    cursor: 'pointer',
    margin: '2.5rem',
    background:'#3F9E4D',
    color: 'aliceblue',
    opacity: '.9'
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
  }
}
