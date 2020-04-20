import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../../../public/styles.css';

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
// https://d3u03kk87rjfaq.cloudfront.net/wp-content/uploads/2009/06/03145943/farmers-markets.jpg
//'https://southsoundmag.com/wp-content/uploads/2019/06/Photo-by-Daria-Shevtsova-via-Pexels-e1559759504402-1024x507.jpg'
//'https://render.fineartamerica.com/images/rendered/default/canvas-print/12/6.5/mirror/break/images-medium/farmers-market-nancy-pahl-canvas-print.jpg' 
  render() {
    if(this.state.submitted === true) return <Redirect to='/products' />
    else return(
      <div style={styles.container}>
        <nav style={styles.nav}></nav>
        <div style={styles.hero}>
        <div style={styles.callToAction}>
        <h1 style={styles.header}>Welcome to Neighbor's Table!</h1>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit} style={styles.form}>
          <input type="text" name='zip' style={styles.input}/>
          <button type="submit" style={styles.button}>Submit</button>
        </form>
        </div>

        </div>
        
      </div>
    )
  }
}

export default Home;

const styles = {
  header: {
    color:'green'
  },
  hero:{
  backgroundImage: 'url(' + 'https:southsoundmag.com/wp-content/uploads/2019/06/Photo-by-Daria-Shevtsova-via-Pexels-e1559759504402-1024x507.jpg' + ')',
  height: '100vh',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  justifyContent:'center',
  alignItems:'center',
  
  },
  callToAction:{
    background: 'aliceblue',
    opacity :'.9',
    minWidth: '600px',
    minHeight: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
   
    borderRadius: '4px'
    // backdropFilter: 'blur(0.8)'
    // // width: '100%',
    // // height:'100%',
    // position:'absolute',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1.5rem'
  },
  input: {
    minWidth: '300px',
    height: '2.5rem',
    fontSize: '1.5rem',
  
  },
  button: {
    minWidth: '150px',
    fontSize: '1.2rem',
    fontWeight: '500',
    borderRadius: '5px',
    padding: '8px 16px',
    cursor: 'pointer',
    margin: '2.5rem',
    background:'#00AB08',
    color: 'aliceblue'
  },
  header: {
    fontFamily: 'Annie Use Your Telescope',
    fontSize: '3.5rem',
    color: '#00AB08',
    fontWeight: '900',
  }
}
